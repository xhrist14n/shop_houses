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
        'tpl/content/sell/filters.html',
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

function sell_modal_close(){
    $("#sell-modal").modal('hide');
}

function sell_modal(){
    $("#modal").load(
        'tpl/content/sell/modal.html',
        function(){
            $("#sell-modal").modal('show');
        }
    );
}

function sell_detail(){
    $("#content").load(
        'tpl/content/sell/sell.html',
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

function project_modal_close(){
    $("#project-modal").modal('hide');
}

function project_modal(){
    $("#modal").load(
        'tpl/content/project/modal.html',
        function(){
            $("#project-modal").modal('show');
        }
    );
}

function project_detail(){
    $("#content").load(
        'tpl/content/project/project.html',
        function(){

        }
    );
}

function project_list(){
    $("#project-list").load(
        'tpl/content/project/list.html',
        function(){

        }
    );
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

