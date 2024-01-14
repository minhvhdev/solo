/**
 * This script to export all file in folder by an index.ts file quickly.
 * For Example:
 * yarn export com type  => update index.ts at src/common/types
 * yarn export ms api       => update index.ts at src/games/marvel-snap/types
 */
const fs = require('fs');
const path = require('path');

const moduleNameMapping = {
  com: 'src/common',
  ms: 'src/games/marvel-snap',
  bj: 'src/games/black-jack',
  images: 'public/assets/images',
};
const folderMapping = {
  api: 'api',
  type: 'types',
  constant: 'constants',
  redux: 'redux/slices',
  playingCards: 'playing-cards',
};
const exportStringMapping = {
  type: (fileName) =>
    `export * from './${fileName}';\n`,
  redux: (fileName) =>
    `export { default as ${fileName.replace(
      '.slice',
      '',
    )}Reducer } from './${fileName}';\n`,
  playingCards: (fileName) =>
    `export {default as ${fileName}} from './${fileName}.svg';\n`,
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
    if (file.endsWith('.svg')) {
      const fileName = file.replace('.svg', '');
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
      console.log('The index.ts file was updated! at' + directoryPath);
    },
  );
});
