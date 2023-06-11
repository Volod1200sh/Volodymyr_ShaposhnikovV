const filter_list = list => list.filter(x => typeof x !== 'string')

console.log("[1,2,'a','b'] -", filter_list([1, 2, 'a', 'b']))
console.log("[1,'a','b',0,30] -", filter_list([1, 'a', 'b', 0, 30]))
console.log("[1,2,'aes','2','85',85] -", filter_list([1, 2, 'aes', '2', '85', 85]))
