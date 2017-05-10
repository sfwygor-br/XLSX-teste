const XLSX = require('xlsx');
const workbook = XLSX.readFile('teste.xlsx');

console.log(workbook);
workbook.worksheet[ 'test' ];
