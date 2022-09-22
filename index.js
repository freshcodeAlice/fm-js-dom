function loadImage(src){
    const img = document.createElement('img');
    img.setAttribute('src', src);

   return new Promise(function (resolve, reject) {
    img.addEventListener('load', () => {
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject('Image cannot be loaded')
    })
   })
}


loadImage('https://wallpaperaccess.com/full/508751.jpg')
.then((img) => {
  document.body.append(img);
})
.catch((err) => {
  console.error(err);
})


setTimeout(() => {
  console.log('code is working');
}, 5000);
