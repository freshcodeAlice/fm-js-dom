/*   Через кожну секунду виводити в консоль числа від 1 до 20 */


function count() {
    let i = 1;
    let id = setTimeout(function recursive(){
        console.log(i++);
        if(i < 10) {
            setTimeout(recursive, 1000);
        }
    }, 1000);
}

count();