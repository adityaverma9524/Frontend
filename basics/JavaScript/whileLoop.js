let num = 12345;
while(num != 0) {
    const digit = num % 10;
    num = parseInt(num/10);
    console.log(digit);
}