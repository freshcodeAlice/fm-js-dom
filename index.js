const p = fetch('./user.json')
 .then((response)=>{
   return response.json();
 })
 .then((data)=>{
      console.log(data);
  })
  .catch((err) => {
    console.log('ERROR HAVE HAPPENED:' + err.message);
  })
  .finally(()=>{
    console.log('FINALLY question closed')
  })
