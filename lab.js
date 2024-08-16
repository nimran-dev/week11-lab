let div = $('.put-here');
let input = $('#input-value');

function replaceTextInDiv(){
let newText = input.val();

div.text(newText);

input.val("");

}

$('.dog').before("<div><img src='https://as2.ftcdn.net/v2/jpg/05/70/88/09/1000_F_570880952_xmPqiu4u6wbDuayCiv9mS2Jvc7upqQNN.jpg' width='200><div");
$('.dog').after("<div><img src='https://i.chzbgr.com/full/9817556992/hAA1BE0BC/bag-12' width='200><div>");

$('#lorem2').remove();

let CATS_API_URL ='https://catfact.ninja/fact';
$.get(CATS_API_URL, (data)=> {
    console.log(data);
    $('.cat-facts').append('<p> ${data.fact} </p>');
})


const JOKES_API_URL = 'https://official-joke-api.appspot.com/random_joke';
$.get(JOKES_API_URL, (data)=> {
    console.log(data);
    $('.jokes').prepend(`<p> ${data.setup} </p>`);
    $('.jokes').append(`<p> ${data.punchline} </p>`);
})

$.get('http://localhost:3000/gradebook/7',(data) => {
    console.log(data);

$('.result').text(data.firstname + " " + data.lastname + ", Grade: "  + data.grade + "%")
})

$.get('http://localhost:3000/gradebook/13',(data) => {

$('.new').text(data.firstname + " " + data.lastname + ", Grade: " + data.grade + "%");

})

$(".test").on("click", function(){

    let fname = $('#firstname').val();
    let lname = $('#lastname').val();
    let grade = $('#grade').val();
    $.post("http://localhost:3000/gradebook",

{
    "firstname" : fname,
    "lastname" : lname,
    "grade" : grade,

}
    );
});

$(".postBtn").on("click", function(){
    let fname = $('#firstname').val();
    let lname = $('#lastname').val();
    let grade = $('#grade').val();


$.post("http://localhost:3000/gradebook",
    {
        "firstname" : fname,
        "lastname": lname,
        "grade": grade
    });
})