function slider(){
    $("#slider").load(
        'tpl/content/home/slider.html',
        function(){
            $('.carousel').carousel();
        }
    );
}


function list(){
    $("#list").load(
        'tpl/content/home/list.html',
        function(){

        }
    );
}


function home(){
    $("#content").load(
        'tpl/content/home.html',
        function(){
            slider();

            list();
        }
    );
}