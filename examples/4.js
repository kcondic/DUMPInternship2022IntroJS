for(let i = 0; i < 10; i++)
    console.log(i);

let j = 0;
while(confirm('Next number?')) {
    console.log(j);
    j++;
}

let chosen;
do {
    chosen = parseInt(prompt('Choose a number, zero is for exit: '));

    if(isNaN(chosen))
        alert('Not a number!');
    else if(chosen === 0)
        continue;
    else if(chosen % 2 === 0)
        alert('The number is even');
    else(chosen % 2 > 0)
        alert('The number is odd');
} while (chosen !== 0)