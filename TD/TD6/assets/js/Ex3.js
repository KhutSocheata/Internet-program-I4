let promise = new Promise((resolve) => {
    setTimeout(() => {
    resolve("Hello World");
    }, 5000);
});

const getMsg = async () => {
    let res = await promise;
    console.log(res);
};

getMsg();