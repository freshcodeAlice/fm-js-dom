/*   Через кожну секунду виводити в консоль числа від 1 до 20 */


function count() {
    let i = 1;
    const id = setInterval(() => {
        console.log(i++);

        if(i > 10) {
            clearInterval(id);
            console.timeEnd('1');
        }
     }, 1000);
}

console.time('1');
count();