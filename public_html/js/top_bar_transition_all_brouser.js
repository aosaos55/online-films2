function log(p){
    return console.log(p);
}

function handler_form_registration_action_show(){
    var t=$('.top-bar');
    t.css({'top':'0px','transition':'all .8s ease 0s'});
    $('.layer-user-registration').css('z-index','1');
}

function handler_form_registration_action_hide(t,m){
    t=$('.top-bar');
    t.removeAttr('style');
}

function handler_form_auth_action_show(){
    var t=$('.top-bar');
    t.css({'top':'-250px','transition':'all .8s ease 0s'});
    $('.layer-user-registration').removeAttr('style');
}
function handler_form_auth_action_hide(){
    var t=$('.top-bar');
    t.removeAttr('style');
}
            
function handler_user_action(){
          var t=$(this);
          if(t.hasClass('pseudo-link_registration') && t.parent()[0].className=='user-action-menu'){
	      if(typeof $('.top-bar').attr('style') != 'undefined') return false;
              handler_form_registration_action_show();
          }
          else if(t.hasClass('pseudo-link_auth') && t.parent()[0].className=='user-action-menu'){
	      if(typeof $('.top-bar').attr('style') != 'undefined') return false;
              handler_form_auth_action_show();
          }
          else if(t.hasClass('pseudo-link_close') && t.parent().hasClass('layer-user-registration')){
              handler_form_registration_action_hide();
          }
          else if(t.hasClass('pseudo-link_close') && t.parent().hasClass('form-user-auth')){
              handler_form_auth_action_hide();
          }
 }
            

$(function(){
    var setInterval_form_registration_action_show,setInterval_form_registration_action_hide,setInterval_form_auth_action_show,setInterval_form_auth_action_hide;
    $('[class^=pseudo-link]').bind('click',handler_user_action);
    
});