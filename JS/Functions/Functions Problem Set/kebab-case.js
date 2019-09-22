function kebabToSnake(str) {
    // replace all '-' with '_'
    var newStr = str.replace(/-/g, '_');
    // return str
    return newStr;
}