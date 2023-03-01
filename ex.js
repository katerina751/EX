// Задание 1


function strCount(str, letter) {
    str = str.split('');
    result = str.filter(function (el) {
        return el.toLowerCase().indexOf(letter.toLowerCase()) > -1;
    })
    return result.length;
}

console.log(strCount('zsdezz', 'z'));


// Задание 2

const squareSum = (numbers) => {
    return numbers.map(n => n ** 2).reduce((a, b) => a + b, 0);
}

console.log(squareSum([1, 5, 2]));

// Задание 3

function nearestSq(n) {
    if (Math.pow(Math.round(Math.sqrt(n)), 2) === n) return n;
    else return Math.pow(Math.round(Math.sqrt(n)), 2);
}
console.log(nearestSq(111));

// Задание 4

function solution(str) {
    return str.split('').reverse().join('');
}

console.log(solution('world'));

// Задание 5

function addLength(str) {
    let str1 = str.split(' ');
    let result = str1.map(function (el) {
        return (el + ' ' + el.length);
    });
    return result;
}

console.log(addLength('you will win'));

// Задание 6

function mango(quantity, price) {
    if (quantity % 3 === 0) return Math.round(price / 3 * 2 * quantity);
    else return (Math.floor(quantity / 3) * 2 + (quantity % 3)) * price;
}

console.log(mango(27, 97));

// Задание 7

function litres(time) {
    return Math.floor(time * 0.5);
}

console.log(litres(11.8));

// Задание 8

function invert(array) {
    return array.map(function (el) {
        return (el * (-1));
    });
}

console.log(invert([1, -2, 3, -4, 5]));

// Задание 9

function powersOfTwo(n) {
    let res = [];
    for (let i = 0; i <= n; i++)
        res.push(i);
    return res.map(function (el) {
        return (Math.pow(2, el));
    });
}

console.log(powersOfTwo(3));


// Задание 10

function grow(x) {
    return x.reduce((acc, rec) => acc*rec);
}

console.log(grow([1, 2, 3, 4]));



