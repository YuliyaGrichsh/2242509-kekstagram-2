// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
function qetRandomPositiveInteger (a, b) {

const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));

const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

const result = Math.random() * (upper - lower + 1) + lower;

return Math.floor(result);

}

function checkStringLength (string, length) {

    return string.length <= length;

  }
