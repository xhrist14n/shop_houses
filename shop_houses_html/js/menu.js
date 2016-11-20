function menu(){
    $('#menu').load(
        'tpl/menu/menu.html',
        function(){

        }
    );
}

function active_menu(id){
    $('#navbar-menu').find('li').removeClass('active');
    $('#navbar-right-menu').find('li').removeClass('active');

    $('#navbar-menu').find('#'+id).addClass('active');

    $('#navbar-right-menu').find('#'+id).addClass('active');
}