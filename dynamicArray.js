'use strict';


const processData(input) => {
    //Enter your code here
    input = input.split("\n");
    const [valueN, valueQ] = input.shift().split(' ');
    const queries = input.reduce((acc, val) => {
        acc.push(val.split(' '));
        return acc;
    }, []);

console.log('but');
    console.log(input)
}
