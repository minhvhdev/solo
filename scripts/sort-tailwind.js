const fs = require('fs');
const path = require('path');

const { sortClasses } = require('@shufo/tailwindcss-class-sorter');

const currentPath = process.argv[2];

const filePath = path.resolve(__dirname, currentPath);

fs.readFile(filePath, 'utf8', function (err, data) {
  if (err) {
    return console.error(err);
  }
  const regex = /(Twc:\s*'.*')/g;
  let sortedData = '';
  data.match(regex).forEach((item) => {
    const classes = item.split(`'`)[1];
    if (sortedData) {
      sortedData = sortedData.replace(classes, sortClasses(classes));
    } else {
      sortedData = data.replace(classes, sortClasses(classes));
    }
    console.log(sortedData);
  });

  fs.writeFile(filePath, sortedData, 'utf8', function (err) {
    if (err) {
      return console.error(err);
    }

    console.log(`Sorted classes in ${filePath}`);
  });
});
