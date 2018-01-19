'use strict';


const processData(input) => {
    //Enter your code here
    input = input.split("\n");
    const [valueN, valueQ] = input.shift().split(' ');
    const queries = input.reduce((acc, val) => {
        acc.push(val.split(' '));
        return acc;
    }, []);

//I'm going to need to actually work on some of these at some point
// but not rn
// but for real
// shift
// need to hit codeTriage lol
//beast
    console.log(input)
}
