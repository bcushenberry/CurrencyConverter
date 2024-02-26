// A simple function showcasing recursion in Javascript
function recursion(number) {
    if (number === 1)
        return 1;
    else 
        return number * recursion(number - 1);
}

console.log(recursion(4))