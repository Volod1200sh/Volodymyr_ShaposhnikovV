const count_pairs = (array, target) =>
    array.reduce((result, x) => result += array.reduce((res, y) => res += x + y === target, 0) - (target === x * 2), 0) / 2

console.log("array: [1, 4, 6, 2, 2, 0, 4, 7], target: 5 =>", count_pairs([1, 4, 6, 2, 2, 0, 4, 7], 5))
console.log("array: [1, 4, 6, 2, 2, 0, 4, 7], target: 8 =>", count_pairs([1, 4, 6, 2, 2, 0, 4, 7], 8))
console.log("array: [1, 4, 6, 2, 2, 0, 4, 7], target: 12 =>", count_pairs([1, 4, 6, 2, 2, 0, 4, 7], 12))
