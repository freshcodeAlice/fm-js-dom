const id = setTimeout(func, 10000);
console.log(id);

function func() {
    console.log(`2+2=${2+2}`);
}

clearTimeout(id);