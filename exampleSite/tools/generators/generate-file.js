const { readFileSync, writeFile, existsSync, mkdirSync } = require('fs');
const path = require('path');

/**
 * 
 * @param {string} src location of source templat file
 * @param {string} outDir direcotry where file should be created, if directory doesn't exists, it's created.
 * @param {string} outFileName name of the file to be created.
 * @param {string} helpers helper functions passed to templates.
 */
function generateFile(
    src,
    outDir,
    outFileName,
    helpers
) {
    const 
        ejs = require('ejs'),
        template = readFileSync(src, 'utf-8'),
        content = ejs.render(template, helpers, {}),
        file = path.join(outDir, outFileName);

    // Create directories if doesn't exist.
    if(!existsSync(outDir)) {
        mkdirSync(outDir, {recursive: true})
    }

    writeFile(file, content, () => console.log(`Created: ${file}`));
}

module.exports = {
    generateFile
}