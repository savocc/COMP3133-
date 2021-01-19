const csv = require('csv-parser')
const fs = require('fs')

fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (row) => {
    if(row['country'] == 'Canada'){
    fs.appendFile('canada.txt', JSON.stringify(row), function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      })
  }
  else if(row['country'] == 'United States'){
    fs.appendFile('usa.txt', JSON.stringify(row) , function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      })
}
})
  .on('end', () => {
    console.log('done');
  });