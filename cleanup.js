const core = require('@actions/core');
const io = require('@actions/io');


const folderToCache = core.getInput('folder-to-cache', { required: true });
const cacheTargetFolder = core.getInput('storage-folder', { required: true })

core.info(`Caching build folder from ${folderToCache} to ${cacheTargetFolder}`)

await io.cp(folderToCache, cacheTargetFolder, { recursive: true, force: false });

core.info(`Cached build folder from ${cacheTargetFolder} to ${folderToCache}`)


