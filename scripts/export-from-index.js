/**
 * This script to export all file in folder by an index.ts file quickly.
 * For Example:
 * yarn export common type  => update index.ts at src/common/types
 * yarn export ms api       => update index.ts at src/games/marvel-snap/types
 */
const fs = require('fs');
const path = require('path');

const moduleNameMapping = {
  common: 'src/common',
  ms: 'src/games/marvel-snap',
};
const folderMapping = {
  api: 'api',
  type: 'types',
  constant: 'constants',
  redux: 'redux/slices',
};
const exportStringMapping = {
  type: (fileName) =>
    `export type { default as ${fileName.replace(
      '.type',
      '',
    )} } from './${fileName}';\n`,
  redux: (fileName) =>
    `export { default as ${fileName.replace(
      '.slice',
      '',
    )}Reducer } from './${fileName}';\n`,
};
const moduleName = process.argv[2];
const folderName = process.argv[3];

const directoryPath = path.join(
  __dirname,
  `../${moduleNameMapping[moduleName]}/${folderMapping[folderName]}`,
);
let exportString = '';

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach(function (file) {
    if (file.endsWith('.ts') && file !== 'index.ts') {
      const fileName = file.replace('.ts', '');
      exportString += exportStringMapping[folderName](fileName);
    }
  });

  fs.writeFile(
    path.join(directoryPath, 'index.ts'),
    exportString,
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('The index.ts file was updated!');
    },
  );
});
