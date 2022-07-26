const getPosts = axios.get('https://jsonplaceholder.typicode.com/posts');
const getComments = axios.get('https://jsonplaceholder.typicode.com/comments');
const getPhotos = axios.get('https://jsonplaceholder.typicode.com/photos');

Promise.all([getPosts,getComments,getPhotos]).then((result) => {

    console.log("data is loaded", result);
    $(".loading").css("display", "");
  
    setTimeout(function(){
        $(".loading").css("display", "none");
        var c = 1;
        var number_display =20;
        while(c<=number_display){
        list_data(c,result[1].data[c].name,result[1].data[c].email,result[0].data[c].title);
        c++;
        }
        $(".success").css("display", "");
    },2000);

    }).catch(() => {
    $(".loading").css("display", "none");
    $(".success").css("display", "none");
    $(".warning").css("display", "");
    })

    function list_data(id,Username,Email,Title){
    temp = ' <tr> ' +
            ' <td>'+id+'</td>'+
            ' <td>'+Username+' </td>'+
            ' <td>'+Email+' </td>'+
            ' <td>'+Title+' </td>'+
            ' </tr> ';

    $('table').append(temp);
}
