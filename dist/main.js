(()=>{"use strict";var e,t,n,c,o=document.querySelector(".slider__button_type_forward"),r=document.querySelector(".slider__button_type_backward"),a=function(){switch(!0){case screen.width>1280:return 380;case screen.width>768:return 260;default:return 130}}();o.addEventListener("click",(function(){document.querySelector(".slider__images").scrollLeft+=a})),r.addEventListener("click",(function(){document.querySelector(".slider__images").scrollLeft-=a}));var d=!1,i="slider__images_type_active",s=document.querySelector(".slider__images"),l=function(){d=!1,s.classList.remove(i)};s.addEventListener("mousedown",(function(n){d=!0,s.classList.add(i),e=n.pageX-s.offsetLeft,t=s.scrollLeft})),s.addEventListener("mousemove",(function(o){d&&(n=o.pageX-s.offsetLeft,c=n-e,s.scrollLeft=t-c)})),s.addEventListener("mouseleave",l),s.addEventListener("mouseup",l);var u=document.querySelector(".header__button"),_=(document.querySelector(".header__links"),document.querySelector(".body")),f=document.querySelectorAll(".header__menu-link_type_expandable"),m=document.querySelectorAll(".accordion__item-container");function v(e,t,n,c){var o=t.parentNode.querySelector(".".concat(n)),r=t.parentNode.querySelector(".".concat(c));o.classList.toggle("".concat(n,"_type_active")),o.classList.toggle("".concat(n,"_type_default")),r.classList.toggle("".concat(c,"_type_active"))}u.addEventListener("click",(function(){v(event,u,"header__button","header__links"),_.classList.toggle("overlay_type_active")})),f.forEach((function(e){e.addEventListener("click",(function(t){screen.width<=830&&v(0,e,"header__dropdown-button","header__dropdown-container")}))})),m.forEach((function(e){e.addEventListener("click",(function(t){return v(0,e,"accordion__button","accordion__content-container")}))}))})();
//# sourceMappingURL=main.js.map