const p = new Promise(executor);

console.log(p);


function executor(resolve, reject) {
  /////////////////////
    if(Math.round(Math.random())){
      resolve();
    } else {
      reject();
    }
}

/////////////

p.then((data)=>{
  console.log(data);
}, (err)=>{
  console.error(err);
})