console.log('start')
const p = new Promise(function(resolve, reject) { // status: pending
 console.log('In promise')
  setTimeout(() => {
    console.log('in timeout')
  resolve('It time!')
 }, 5000);
}); 


 p.then((data)=>{
  console.log(data);
 }, (err) => {
  console.log(err)
 })


 console.log('end');