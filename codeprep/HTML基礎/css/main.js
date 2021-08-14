'use strict';

console.log('はじめてのJavaScriptを始めました。');

var name = 'code';

var value = name !== 'code' ? 'welcome' : 'see you';

console.log(value)

for (let i = 0; i < 15; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  const element = i;
  console.log(element);

}

function add(a, b) {
  return a + b;
}

function output(value) {
  if (value % 3 === 0) {
    console.log(value);
  } else {
    console.log(null);
  }
}

for (let i = 0; i < 10; i++) {
  var result = add(i, 3);
  output(result);
}