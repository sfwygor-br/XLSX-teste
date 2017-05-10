const XLSX = require('xlsx');
const workbook = XLSX.readFile(__dirname + '/teste.xlsx');

//console.log(workbook);
console.log(workbook.Sheets[ 'test' ]);
