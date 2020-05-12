$(document).ready(function(){

    $('button').click(function(){
        const name = $('#name').val();
        $('.image').attr('src','https://joeschmoe.io/api/v1/'+name);
        
    });
});
