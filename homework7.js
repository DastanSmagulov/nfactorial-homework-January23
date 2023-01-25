// first
// function delay(ms) {
//     return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms)
//     })
// }

// delay(3000).then(() => console.log("выполнилось через 3 секунды"));


// second

// let promise = new Promise(function (resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// promise.then(alert);

// only first resolve will work, second will be ignored

// third

// promise.then(f1).catch(f2);

// promise.then(f1, f2);

// They not equal. First one is chained, but second is not