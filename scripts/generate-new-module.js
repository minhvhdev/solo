/**
 * This script to create base folder in new module quickly.
 * For Example:
 * yarn module black-jack  => create base folder with index.ts at src/games/black-jack
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

const baseDir = path.join('./src', 'games', args[0]);
const directories = [
  'components',
  'constants',
  'data',
  'enums',
  'HOCs',
  'redux',
  'types',
];
const componentFolders = ['atoms', 'molecules', 'organisms', 'templates'];
const reduxFolders = ['slices', 'selectors'];

const createFolder = (dirPath) => {
  try {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Directory ${dirPath} created successfully!`);
  } catch (err) {
    console.error(err);
  }
};

const createFile = (filePath, dirPath) => {
  try {
    fs.writeFileSync(filePath, '');
    console.log(`File index.ts created successfully in ${dirPath}!`);
  } catch (err) {
    console.error(err);
  }
};

directories.forEach((dir) => {
  const dirPath = path.join(baseDir, dir);
  fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`Directory ${dirPath} created successfully!`);

    switch (dir) {
      case 'components':
        componentFolders.forEach((component) => {
          const componentPath = path.join(dirPath, component);
          createFolder(componentPath);
          const indexPath = path.join(componentPath, 'index.ts');
          createFile(indexPath, componentPath);
        });
        break;
      case 'redux': {
        reduxFolders.forEach((redux) => {
          const reduxPath = path.join(dirPath, redux);
          createFolder(reduxPath);
        });
        const reducerName = `${args[0]
          .split('-')
          .map((item, index) => {
            if (index !== 0) {
              return item.charAt(0).toUpperCase() + item.slice(1);
            }
            return item;
          })
          .join('')}Reducer.ts`;
        const reducerPath = path.join(dirPath, reducerName);
        createFile(reducerPath, dirPath);
        break;
      }
      default: {
        const filePath = path.join(dirPath, 'index.ts');
        createFile(filePath, dirPath);
        break;
      }
    }
  });
});
