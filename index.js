/*
const regexp = /^Test$/; //шукаємо слово "Тест"
/^[A-Za-z]{2,5}$/ //шукаємо слово з 2-5 літер (великих чи маленьких)
/^[A-Za-z0-9\_\.]+\@[A-Za-z0-9]+\.[A-Za-z0-9]+$/ // email


*/
const testString = 'sunnyday23@mail.com';
const failTestString = '434sdf';

const str1 = 'hello';
const str2 = new String('hello');

//RegExp

const reg1 = /^[A-Za-z0-9\_\.]+\@[A-Za-z0-9]+\.[A-Za-z0-9]+$/mi;
console.dir(reg1);
const reg2 = new RegExp('^[A-Za-z]{2,5}$');
console.log(reg2);
