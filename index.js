const core = require('@actions/core');
const io = require('@actions/io');


async function action() {
    const folderToCache = core.getInput('folder-to-cache', { required: true });
    const cacheTargetFolder = core.getInput('storage-folder', { required: true })

    core.info(`Attempting to restore cache from ${cacheTargetFolder} to ${folderToCache}`)

    await io.cp(cacheTargetFolder, folderToCache, { recursive: true, force: false });

    core.info(`Restored cache from ${cacheTargetFolder} to ${folderToCache}`)
}

return action().then(() => {
    console.log('finished with local-cache-action')
})


