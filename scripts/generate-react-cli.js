/**
 * This script to create component and page quickly. For Example:
 * yarn gen Button com a  => Button Component at common/components/atoms
 * yarn gen Card ms a    => Card component at games/marvel-snap/components/atoms
 * yarn gen login         => login page at pages/
 * yarn gen home ms       => home page at pages/games/marvel-snap
 */

const { exec, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const pathComponentMap = {
  com: 'common',
  ms: 'games/marvel-snap',
};
const pathPageMap = {
  ms: 'games/marvel-snap',
};
const levelMap = {
  a: 'atoms',
  m: 'molecules',
  o: 'organisms',
  t: 'template',
};
const name = process.argv[2];
const pathName = process.argv[3];
const componentLevel = process.argv[4];

const isPage = name[0].toLocaleLowerCase() === name[0];
const pageUrl = pathName ? '/' + pathPageMap[pathName] : '';

const generatedPath = isPage
  ? `src/pages${pageUrl}`
  : `src/${pathComponentMap[pathName]}/components/${levelMap[componentLevel]}`;

const filePathToOpen = isPage
  ? `${generatedPath}/${name}/index.tsx`
  : `${generatedPath}/${name}/${name}.tsx`;

//Generate Component
execSync(
  `npx generate-react-cli c ${name} --path ${generatedPath} ${
    isPage ? '--type=page' : ''
  }`,
  {
    stdio: 'inherit',
  },
);

// Auto Import
if (!isPage) {
  const dir = `./${generatedPath}`;

  fs.appendFileSync(
    path.join(dir, 'index.ts'),
    `export { default as ${name} } from './${name}/${name}';\n`,
  );
  console.info(`Auto import success at ${generatedPath}/index.ts`);
}

// Open file
exec(`code ${filePathToOpen}`, (err) => {
  if (err) {
    return console.log(err);
  }
});
