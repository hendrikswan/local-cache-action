const core = require('@actions/core');
const io = require('@actions/io');


const folderToCache = core.getInput('folder-to-cache', { required: true });
const cacheTargetFolder = core.getInput('storage-folder', { required: true })

core.info(`Attempting to restore cache from ${cacheTargetFolder} to ${folderToCache}`)

await io.cp(cacheTargetFolder, folderToCache, { recursive: true, force: false });

core.info(`Restored cache from ${cacheTargetFolder} to ${folderToCache}`)


