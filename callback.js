// function main(param1, param2, cb) {
//   console.log(param1, param2);
//   cb();
// }

// function myCallback() {
//   console.log("hello callback");
// }

// main(1, 2, myCallback);

// 1. function injection
// function calculate(param1, param2, callback) {
//   let result = param1 + param2;
//   if (typeof callback === "function") {
//     result = callback(param1, param2);
//   }
//   return result;
// }

// let a = calculate(7000, 2000, function (x, y) {
//   return x / y;
// });

// let b = calculate(3000, 2000);

// console.log(a);
// console.log(b);

// 2. event listener
// document.getElementById("btn").addEventListener("click", function () {
//   alert("hello eduwork");
// });

// 3. callback pada asynchronous
function getData(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      return cb(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

const data = getData("https://jsonplaceholder.typicode.com/users/1", function (data) {
  console.log(data);
});

// console.log(data);
