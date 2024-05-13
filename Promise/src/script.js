// const janji = new Promise(function(resolve, reject){
//   if(true) {
//     resolve('promise berhasil')
//   } else {
//     reject('promise gagal');
//   }
// });

// janji.then(function(result){
//   console.log(result);
// }).catch(error => console.log(error))
// .finally(() => {
//   console.log('promise selesai di eksekusi')
// })

const getData = (kondisi) => {
  return new Promise((resolve, reject) => {
    if (kondisi) {
      setTimeout(() => {
        resolve("selamat datang di kelas mern");
      }, 3000);
    } else {
      reject(new Error("maaf kelas belum di buka :( "));
    }
  });
};

// document.getElementById("btn").addEventListener("click", async function () {
//   this.innerHTML = "loading...";
//   const p = document.querySelector("p");
//   const data = getData(false);
//   data
//     .then((res) => {
//       p.innerHTML = res;
//     })
//     .catch((err) => {
//       p.innerHTML = err;
//     })
//     .finally(() => {
//       this.innerHTML = "click me";
//     });
// });

//* async await

document.getElementById("btn").addEventListener("click", async function () {
  this.innerHTML = "loading...";
  const p = document.querySelector("p");
  try {
    const data = await getData(true);
    p.innerHTML = data;
  } catch (error) {
    p.innerHTML = error;
  } finally {
    this.innerHTML = "Hi! click me";
  }
});
