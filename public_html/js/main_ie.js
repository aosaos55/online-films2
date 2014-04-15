function m_clearInterval(p){
    clearInterval(p);
    p=null;
    return;
}

function remove_attr(el,s){
    for(i=0;i<el.length;i++){
        $(el[i]).removeAttr(s);
    }
    return;
}

function handler_form_registration_action_show(){
    var t=$('.top-bar');
    if(typeof t.attr('style') == 'undefined'){
        $('.layer-user-registration').css('z-index','1');
        t.css({'margin-top':'11px'});
    }
    var m=t.css('margin-top').match(/\d+/).join();
    if(m<=550){
        t.css('margin-top',+m+15+'px');
    }else if(m>=550){
        t.css('margin-top','550px');
        m_clearInterval(setInterval_form_registration_action_show);
        return false;
    }
}
function handler_form_registration_action_hide(t,m){
    t=$('.top-bar');
    m=t.css('margin-top').match(/\d+/).join();
    if(m<=15){
        t.css('margin-top','0');
        t.removeAttr('style');
        $('.layer-user-registration').removeAttr('style');
        m_clearInterval(setInterval_form_registration_action_hide);
        return false;
    }else{
        t.css('margin-top',+m-15+'px');
    }
}
function handler_form_auth_action_show(){
    var t=$('.top-bar');
    if(typeof t.attr('style') === 'undefined'){
        t.css('margin-top','15px');
        $('.layer-user-auth').css('z-index','1');
    }
    var m=t.css('margin-top').match(/\d+/).join();
    if(m>=300){
        m_clearInterval(setInterval_form_auth_action_show);
        return false;
        
    }else {
        t.css('margin-top',+m+11+'px');
    }
}
function handler_form_auth_action_hide(){
    var t=$('.top-bar');
    var m=t.css('margin-top').match(/\d+/).join();
    if(m<=15){
        t.css('margin-top','0px');
        t.removeAttr('style');
        $('.layer-user-auth').removeAttr('style');
        m_clearInterval(setInterval_form_auth_action_hide);
        return false;
    }
    else{
        t.css('margin-top',+m-15+'px');
    }
}
            
function handler_user_action(){
          var t=$(this);
          if(t.hasClass('pseudo-link_registration') && t.parent()[0].className=='user-action-menu'){
              if(typeof $('.top-bar').attr('style') != 'undefined'){ return false; }
              setInterval_form_registration_action_show=window.setInterval(handler_form_registration_action_show,13);
          }
          else if(t.hasClass('pseudo-link_auth') && t.parent()[0].className=='user-action-menu'){
              if(typeof $('.top-bar').attr('style') != 'undefined'){ return false; }
              setInterval_form_auth_action_show=window.setInterval(handler_form_auth_action_show,15);
          }
          else if(t.hasClass('pseudo-link_close') && t.parent().hasClass('layer-user-registration')){
              setInterval_form_registration_action_hide=window.setInterval(handler_form_registration_action_hide,15);
          }
          else if(t.hasClass('pseudo-link_close') && t.parent().hasClass('form-user-auth')){
              setInterval_form_auth_action_hide=window.setInterval(handler_form_auth_action_hide,15);
          }
}
            

$(function(){
    var setInterval_form_registration_action_show,setInterval_form_registration_action_hide,setInterval_form_auth_action_show,setInterval_form_auth_action_hide;
    $('[class^=pseudo-link]').bind('click',handler_user_action);
    
});