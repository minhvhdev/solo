const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

//Generate Component
const componentName = process.argv[2];
const pathName = process.argv[3] || 'common';

let pathNameMapping = {
  common: 'common',
  lol: 'lol-snap',
  rock: 'rock-paper-scissors',
  tic: 'tic-tac-toe',
};

execSync(
  `npx generate-react-cli c ${componentName} --path src/components/${pathNameMapping[pathName]}`,
  {
    stdio: 'inherit',
  }
);

//Auto Import
const dir = './src/components/common';

fs.appendFileSync(
  path.join(dir, 'index.ts'),
  `export { default as ${componentName} } from './${componentName}/${componentName}';\n`
);
