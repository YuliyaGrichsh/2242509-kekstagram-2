function checkLength(str,maxLength) {
    if (strlength <= maxLength) {
        return true;
    }
    return false;
}

function getrandomNumber(min, max) {
    if (min < 0) {
        return "Ошибка!";
    }
    if (max <= min) {
        return "Проверьте введённые данные!";
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) +min);
}