let num = prompt("Please, enter a number: ");
num++;
if (isNaN(num)) {
    alert("Please enter a number");
} else {
    num--;
    if (num % 2 === 0) {
        alert("Even number");
    } else {
        alert("Odd number");
    }
}