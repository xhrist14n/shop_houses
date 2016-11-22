function slider(){
    $('.carousel').carousel();
}

function slider_none(){
}



function list(){

}


function home(){
    active_menu('home');
    window.location='index.html';
    slider();
}

function house_filter(){

}

function house_list(){

}

function sell_modal_close(){
    $("#sell-modal").modal('hide');
}

function sell_modal(){
    $("#sell-modal").modal('show');
}

function sell_detail(){
    window.location = 'sell_detail.html';
}

function sell(){
    active_menu('sell');
    window.location = 'sell.html';
}

function project_modal_close(){
    $("#project-modal").modal('hide');
}

function project_modal(){
    $("#project-modal").modal('show');
}

function project_detail(){
    window.location='project_detail.html';
}

function project_list(){

}

function project(){
    active_menu('project');
    window.location='project.html';
}

function register(){
    active_menu('register');
    window.location = 'register.html';
}

function login(){
    active_menu('login');
    window.location='login.html';
}

