const digital_root = num => num.toString().split('').reduce((result, digit) => result += parseInt(digit), 0) > 9
    ? digital_root(num.toString().split('').reduce((result, digit) => result += parseInt(digit), 0))
    : num.toString().split('').reduce((result, digit) => result += parseInt(digit), 0)

console.log('36', digital_root(36))
console.log('784', digital_root(784))
console.log('14641', digital_root(14641))
console.log('586756', digital_root(586756))
