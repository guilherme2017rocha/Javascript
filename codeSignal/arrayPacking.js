let a = [1,2,4,8]
let resp = 0
for (const pos in a) {
    let mult = (2 ** (8*pos))
    resp += mult * a[pos]
}
console.log(resp)
