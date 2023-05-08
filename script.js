$(document).ready(onReady);
function onReady(){
    //click listener
    $('#button').on('click', clickFunction)
    $('body').on('click', '.yellow-button', yellowButton)
    $('body').on('click', '.delete-button', deleter)
}
let x = 0;
//click handler
function clickFunction(event){
    event.preventDefault();
    console.log('button click');
    x++;
    $('body').append(`
    <div class = divs>
        <button class="yellow-button" type="button">Yellow</button>
        <button class="delete-button" type="button">Delete</button>
        <p>${x}</p>
    </div>
    `);

}
function yellowButton(){
    $(this).closest('.divs').css('background-color', 'yellow');
}
function deleter(){
    $(this).closest('.divs').remove();
}