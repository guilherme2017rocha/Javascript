let n = 10
let l = 9
let r = 11
let arr = new Array(r-l+1)
let resp = 0
for (let num = l; num <= r; num++) {
    arr.push(num)
}
arr.forEach(num => {
    if (arr.includes(n-num)) {
        resp++
    }
});
console.log(Math.floor((resp+1)/2))
