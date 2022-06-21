let x = [1, 2, 3, 4, 5];
let isEqual = true;

if (x.length === 0) {
    console.log(false);
} else {
    let elem = x[0];

    for (const item of x) {
        if(item !== elem){
            isEqual = false;
            break;
        }
    }
}
console.log(isEqual);






