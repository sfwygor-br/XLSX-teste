const XLSX = require('xlsx');
const workbook = XLSX.readFile('teste.xlsx');

//console.log(workbook);
console.log(workbook.Sheets[ 'test' ]);
