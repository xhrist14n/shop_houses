function menu(){
    $('#menu').load(
        'tpl/menu/menu.html',
        function(){
            active_menu('home');
        }
    );
}

function active_menu(id){
    $('#navbar-menu').find('li').removeClass('active');
    $('#navbar-right-menu').find('li').removeClass('active');
    $('#'+id).addClass('active');
}