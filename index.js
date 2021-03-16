const app_size_object = {
  app_horizontal: {
    width: 1024,
    height: 768 
  },
  app_vertical: {
    width: 768,
    height: 1024
  }
};

var app_current = {
  width: 0,
  height: 0
}

let app_container = document.getElementsByClassName('app-container')[0];
let app_body = document.getElementsByClassName('app-body')[0];
let app_loader = document.getElementsByClassName('app-loader')[0];
let app_logo = document.getElementsByClassName('app-logo')[0];
let app_enter = document.getElementsByClassName('app-enter')[0];
let app_group_link = document.getElementsByClassName('app-group_link')[0];
let app_text_left = document.getElementsByClassName('app-text_left')[0];
let app_text_right = document.getElementsByClassName('app-text_right')[0];
let app_picture = document.getElementsByClassName('app-picture')[0];

let app_logo_touch = document.getElementsByClassName('app-logo_touch')[0];
let app_touch = document.getElementsByClassName('app-touch')[0];
let app_burger = document.getElementsByClassName('app-burger')[0];
let app_close_button = document.getElementsByClassName('app-close_button')[0];
let app_text_touch = document.getElementsByClassName('app-text_touch')[0];
let app_slide = document.getElementsByClassName('app-slide')[0];
let app_picture_touch_slide = document.getElementsByClassName('app-picture_touch-slide')[0];
let app_text_touch_slide = document.getElementsByClassName('app-text_touch-slide')[0];
let app_group_link_touch = document.getElementsByClassName('app-group_link_touch')[0];
let app_group_link_touch_nav = document.getElementsByClassName('app-group_link_touch_nav')[0]; 

window.addEventListener('DOMContentLoaded', (event) => {
  app_current.width = app_loader.clientWidth;
  app_current.height = app_loader.clientHeight;
});

document.addEventListener("keyup", function(event) {
  if (JSON.stringify(app_current) === JSON.stringify(app_size_object.app_horizontal)){
    if (event.code === 'Enter') {
      app_loader.style.animation = "toHeaderLoader 1.5s 1 forwards ease-in-out";
      app_logo.style.animation = "toHeaderLogo 1.5s 1 forwards ease-in-out";
      app_logo.children[0].style.animation = "toHeaderLogo 1.5s 1 forwards ease-in-out";
      app_enter.style.display = "none";
      app_loader.addEventListener("animationend", () => {
        app_group_link.style.animation = "groupLinkShow 0.7s 1 forwards ease-out";
        app_text_left.style.animation = "loaderShow 1.2s 1 forwards ease-out";
        app_text_right.style.animation = "loaderShow 1.2s 1 forwards ease-out";
        app_picture.style.animation = "loaderShow 1.2s 1 forwards ease-out";
        app_container.style.display = "flex";
        app_container.style.flexDirection = "column";
        app_body.style.height = "100%";
      });
    }
  } else {
    return
  }
},{
  once: true
});

document.addEventListener('click', function(event) {
  if (JSON.stringify(app_current) === JSON.stringify(app_size_object.app_vertical)) {
    app_loader.style.animation = "toHeaderLoader 1.5s 1 forwards ease-in-out";
    app_logo_touch.style.animation = "toHeaderLogoTouch 1.5s 1 forwards ease-in-out";
    app_logo_touch.children[0].style.animation = "toHeaderLogoTouch 1.5s 1 forwards ease-in-out";
    app_touch.style.display = "none";
    app_loader.addEventListener("animationend", () => {
      app_burger.style.animation = "groupLinkShow 0.7s 1 forwards ease-out";
      app_logo.children[0].style.animation = "groupLinkShow 0.7s 1 forwards ease-out";
      app_text_touch.style.animation = "loaderShow 1.2s 1 forwards ease-out";
      app_container.style.display = "flex";
      app_container.style.flexDirection = "column";
      app_body.style.height = "100%";
      app_slide.style.display = "block";
      app_picture_touch_slide.style.display = "block";
      app_text_touch_slide.style.display = "block";


      document.addEventListener('click', function(event){
        var noReact = '.app-loader';
        if (!event.target.matches(noReact)) {
          if (event.target == app_slide){
            app_slide.style.animation = "slideBlueReverse 0.3s forwards ease-out";
          } else {
            app_slide.style.animation = "slideBlue 0.3s forwards ease-out";
          }
        }
        if (event.target == app_burger || event.target == app_burger.children[0]){
          app_group_link_touch.addEventListener("animationend", () => {
            app_burger.style.display = "none";
            app_close_button.style.display = "block";
          });
         
          app_slide.style.animation = "none";
          app_group_link_touch.style.display = "block";
          app_group_link_touch_nav.style.display = "flex";

          app_group_link_touch.style.animation = "slideTop 0.5s forwards ease-out";
          app_group_link_touch_nav.style.animation = "slideTopNav 0.5s forwards ease-out";

          
        } else if (event.target == app_close_button || event.target == app_close_button.children[0]) {
          app_group_link_touch.addEventListener("animationend", () => {
            app_burger.style.display = "block";
            app_close_button.style.display = "none";
          });
          app_slide.style.animation = "none";
          app_group_link_touch.style.animation = "slideTopReverse 0.5s forwards ease-out";
          app_group_link_touch_nav.style.animation = "slideTopNavReverse 0.5s forwards ease-out";
        }
      })


    });
  } else {
    return
  }
},{
  once: true
});


function insideHeaderStopPropagation(event) {
  event.stopPropagation();
}



