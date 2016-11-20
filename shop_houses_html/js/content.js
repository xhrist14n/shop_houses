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
    active_menu('home');
    $("#content").load(
        'tpl/content/home.html',
        function(){
            slider();

            list();
        }
    );
}

function house_list(){

}

function sell(){
    active_menu('sell');
    $("#content").load(
        'tpl/content/sell.html',
        function(){
            house_list();
        }
    );
}

function project_list(){

}

function project(){
    active_menu('project');
    $("#content").load(
        'tpl/content/project.html',
        function(){
            project_list();
        }
    );
}