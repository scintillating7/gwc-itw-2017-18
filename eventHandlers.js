$('document').ready(function(){
    $('#searchForAuthor').click(function(){
       Search("author");
    });
    $('#inputForAuthor').keyup(function(e){
        if(e.keyCode === 13){//Enter key pressed
            $('#searchForAuthor').click();//Trigger search button click event
        }
    });
    $('#searchButtonForTitle').click(function(){
       Search("title");
    });
    $('#inputForTitle').keyup(function(e){
        if(e.keyCode === 13){//Enter key pressed
            $('#searchButtonForTitle').click();//Trigger search button click event
        }
    });

});
