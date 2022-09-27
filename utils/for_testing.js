const palindromo = (string) => {
    return string
    .split('')
    .reverse()
    .join('');
}

const media = (array) => {
    let sum = 0;
    array.forEach(num => {
        sum += num;
    })

    if(sum === 0) {
        return sum
    }
    
    return sum / array.length;

}

module.exports = {
    palindromo,
    media
}