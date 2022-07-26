let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 wait 5sec');
    }, 5000);
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 wait 3sec');
    }, 3000);
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 wait 1sec');
    }, 1000);
})
let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 4 wait 4sec');
    }, 4000);
})
let promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 5 wait 3sec');
    }, 3000);
})
console.log('loading...');
    Promise.all([promise1, promise2, promise3, promise4, promise5]).then((display) => {
    console.log(display);
}).catch(() => {
    console.log('fail');
})