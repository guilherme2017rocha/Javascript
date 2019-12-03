let a = 8
let b = 9
let aux = a
let resp = 0
let str = ''
while (aux <= b) {
    /*
    switch (aux) {
        case 1: resp+=1; break;
        case 2: resp+=1; break;
        case 3: resp+=2; break;
        case 4: resp+=1; break;
        case 5: resp+=2; break;
        case 6: resp+=2; break;
        case 7: resp+=3; break;
        case 8: resp+=1; break;
        case 9: resp+=2; break;
        case 10: resp+=2; break;
        default: break;
    }
    */
    str += aux.toString(2)
    aux++
}

console.log(str.split('1').length - 1)
