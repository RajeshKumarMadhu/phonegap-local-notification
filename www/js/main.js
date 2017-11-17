$(document).ready(function(){
    $("#notify").click(function(){
        var message = $("#message").val();
        if(message != '' && message != null){
          cordova.plugins.notification.local.schedule({
              title: 'Demo notification',
              text: message,
              foreground: true
          });
        }
    });
});
