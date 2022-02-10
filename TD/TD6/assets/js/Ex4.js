function getPosts() {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
}

function getComments() {
    return axios.get("https://jsonplaceholder.typicode.com/comments");
}

function getPhoto() {
    return axios.get("https://jsonplaceholder.typicode.com/photos");
}

Promise.all([getPosts(), getComments(), getPhoto()]).then((res) => {
    console.log("load is ready");
});