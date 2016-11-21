function slider(){
    $("#slider").load(
        'tpl/content/home/slider.html',
        function(){
            $('.carousel').carousel();
        }
    );
}

function slider_none(){
    $("#slider").load(
        'tpl/content/home/slider_none.html',
        function(){

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

function house_filter(){
    $("#filter").load(
        'tpl/content/sell/filter.html',
        function(){

        }
    );
}

function house_list(){
    $("#list-sell").load(
        'tpl/content/sell/list.html',
        function(){

        }
    );
}

function sell(){
    active_menu('sell');
    $("#content").load(
        'tpl/content/sell.html',
        function(){
            house_filter();
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

function register(){
    active_menu('register');
    $("#content").load(
        'tpl/content/register.html',
        function(){

        }
    );
}

function login(){
    active_menu('login');
    $("#content").load(
        'tpl/content/login.html',
        function(){

        }
    );
}

