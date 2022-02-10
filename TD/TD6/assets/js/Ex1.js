let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello world!');
    }, 5000);
})
    console.log('Loading...')
    promise.then((message) => {
    console.log(message);
}).catch(() => {
    console.log('fail');
})