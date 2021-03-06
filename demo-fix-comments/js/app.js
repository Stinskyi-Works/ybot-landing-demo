(()=>{"use strict";var t="down",e=function(t){t&&(t.classList.contains("highlighted")||t.classList.add("highlighted"))};function a(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var o=["Agentless","Multilingual","Autonomous","AI + RPA","Self-service","Omnichannel"],n=function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"play",(function(){e.stackTl.play("step2")})),a(this,"pause",(function(){e.stackTl.pause()})),this.pointer=2,this.stackTl=gsap.timeline({repeat:-1,paused:!0,onRepeat:function(){var t=document.getElementById("carousel-item1"),a=document.getElementById("carousel-item2");t&&a&&(a.innerText=t.innerText,t.innerText=o[e.pointer],e.pointer+=1,e.pointer>=o.length&&(e.pointer=0))}}),this.stackTl.set("#carousel-item1",{translateY:-18,translateX:-44,opacity:0}),this.stackTl.set("#carousel-item2",{translateY:-18,translateX:-44,backgroundColor:"#F2F4FF",color:"#D0D5FF"}),this.stackTl.addLabel("step1"),this.stackTl.to("#carousel-item2",{translateY:0,translateX:-24,opacity:1,backgroundColor:"#DFE2FF",color:"#3448FE",duration:.3,ease:"power2"}),this.stackTl.to("#carousel-item1",{opacity:.2,duration:.4},"<"),this.stackTl.addLabel("step2"),this.stackTl.to("#carousel-item2",{translateY:100,opacity:0,duration:.4,delay:1.5,ease:"power2"})},i=function(t){return String(t).padStart(2,"0")};function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var s=function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"updateCounter",(function(){e.counter+=1;var t=Math.floor(e.counter/60),a=e.counter-60*t;requestAnimationFrame((function(){e.phoneTimeElem&&(e.phoneTimeElem.innerText="".concat(i(t),":").concat(i(a)))}))})),r(this,"checkResize",(function(){e.isDirtySize&&e.isAnimating&&(e.resizeCb&&clearTimeout(e.resizeCb),e.resizeCb=setTimeout((function(){requestAnimationFrame((function(){if(e.phoneSurfaceWrapperElem&&e.phoneSurfaceElem){var t=Math.min(e.phoneSurfaceWrapperElem.offsetWidth/e.phoneSurfaceElem.offsetWidth,e.phoneSurfaceWrapperElem.offsetHeight/e.phoneSurfaceElem.offsetHeight);gsap.to(e.phoneSurfaceElem,{scale:t,duration:.5})}}))}),100))})),r(this,"markToResize",(function(){e.isDirtySize=!0,e.checkResize()})),r(this,"play",(function(){e.isAnimating=!0,e.phoneTl.play(),e.counterInterval||(e.counterInterval=setInterval((function(){return e.updateCounter()}),1e3)),e.checkResize()})),r(this,"pause",(function(){e.isAnimating=!1,e.counterInterval&&(clearInterval(e.counterInterval),e.counterInterval=null),e.phoneTl.pause()})),this.isDirtySize=!1,this.isAnimating=!1,this.resizeCb=null,this.counter=0,this.counterInterval=null,this.phoneSurfaceWrapperElem=document.getElementById("hero-phone-surface-wrapper"),this.phoneSurfaceElem=document.getElementById("hero-phone-surface"),this.phoneTimeElem=document.getElementById("hero-phone-time"),this.customerArrow=document.getElementById("hero-customer-arrow"),this.ybotArrow=document.getElementById("hero-ybot-arrow"),this.sfArrow1=document.getElementById("hero-salesforce-arrow1"),this.sfArrow2=document.getElementById("hero-salesforce-arrow2"),this.phoneTl=gsap.timeline({paused:!0,delay:3}),this.phoneTl.call((function(){e.counterInterval||(e.counterInterval=setInterval((function(){return e.updateCounter()}),1e3))})),this.phoneTl.to("#hero-customer",{translateY:0,opacity:1,duration:.5,ease:"power4"}),this.phoneTl.add(gsap.delayedCall(0,(function(){e.customerArrow&&e.customerArrow.classList.add("visible")}))),this.phoneTl.add(gsap.delayedCall(.4,(function(){e.ybotArrow&&e.ybotArrow.classList.add("visible")}))),this.phoneTl.to("#hero-ybot",{translateY:0,opacity:1,duration:.5,delay:.8,ease:"power4"}),this.phoneTl.to("#hero-salesforce",{translateY:0,opacity:1,duration:.3,ease:"power4"}),this.phoneTl.add(gsap.delayedCall(0,(function(){e.sfArrow1&&e.sfArrow1.classList.add("visible")}))),this.phoneTl.add(gsap.delayedCall(.8,(function(){e.sfArrow2&&e.sfArrow2.classList.add("visible")}))),this.phoneTl.to("#bubble1",{opacity:1,translateY:0,duration:.3,delay:1,ease:"power4"}),this.phoneTl.to("#bubble2",{opacity:1,translateY:0,duration:.3,delay:2,ease:"power4"}),this.phoneTl.to("#bubbles",{translateY:-58,duration:.3,delay:2}),this.phoneTl.to("#bubble1",{opacity:0,duration:.3,ease:"power4"},"<"),this.phoneTl.to("#bubble3",{opacity:1,translateY:0,duration:.3,ease:"power4"},"<"),this.phoneTl.to("#bubbles",{translateY:-116,duration:.3,delay:2}),this.phoneTl.to("#bubble2",{opacity:0,duration:.3,ease:"power4"},"<"),this.phoneTl.to("#bubble4",{opacity:1,translateY:0,duration:.3,ease:"power4"},"<"),this.phoneTl.to("#bubbles",{translateY:-192,duration:.3,delay:2}),this.phoneTl.to("#bubble3",{opacity:0,duration:.3,ease:"power4"},"<"),this.phoneTl.to("#bubble5",{opacity:1,translateY:0,duration:.3,ease:"power4"},"<"),this.phoneTl.to("#bubbles",{translateY:-250,duration:.3,delay:2}),this.phoneTl.to("#bubble4",{opacity:0,duration:.3,ease:"power4"},"<"),this.phoneTl.to("#bubble6",{opacity:1,translateY:0,duration:.3,ease:"power4"},"<"),this.phoneTl.to("#bubbles",{translateY:-280,opacity:0,duration:.3,delay:2}),this.phoneTl.to("#messenger",{left:0,duration:.5,ease:"power4"}),this.phoneTl.to("#chat-message1",{opacity:1,duration:.5,ease:"power4",delay:.2}),this.phoneTl.add(gsap.delayedCall(.8,(function(){var t=document.getElementById("chat-input");t&&(t.innerText="5",t.classList.add("active"))}))),this.phoneTl.add(gsap.delayedCall(2,(function(){var t=document.getElementById("chat-input");t&&(t.innerText="Write a message",t.classList.remove("active"))}))),this.phoneTl.to("#chat-content",{translateY:70,duration:.5,delay:0,ease:"power4"}),this.phoneTl.to("#chat-message2",{opacity:1,duration:.5,ease:"power4"},"<"),this.phoneTl.to("#chat-content",{translateY:0,duration:.5,delay:2,ease:"power4"}),this.phoneTl.to("#chat-message3",{opacity:1,duration:.5,ease:"power4"},"<"),this.phoneTl.pause()};var l=function(){gsap.to("#f1-timer",{textContent:32,duration:3,snap:{textContent:1},delay:.5}),gsap.to(["#f1-icon","#f1-title"],{opacity:1,duration:.5,delay:3.5})},c=[{elemId:"feat-resolution-time",runAnimation:l},{elemId:"feat-resolution-time",runAnimation:l},{elemId:"feat-customer-experience",runAnimation:function(){gsap.to("#f2-stars > .star",{opacity:1,scale:1,duration:.5,stagger:{each:.3},delay:.5}),gsap.to("#f2-card2",{opacity:1,translateY:0,duration:.5,delay:2})}},{elemId:"feat-reduce-cost",runAnimation:function(){gsap.to("#f3-chart",{scaleY:1,opacity:1,duration:.5,delay:.5}),gsap.to(["#f3-point","#f3-bubble"],{opacity:1,duration:.5,delay:1})}},{elemId:"feat-omnichannel-support",runAnimation:function(){gsap.to(["#f4-phone","#f4-chat"],{opacity:1,translateX:0,duration:.5,delay:.5}),gsap.to("#f4-line",{opacity:1,duration:1,delay:1}),gsap.to("#f4-card",{opacity:1,duration:.5,delay:1.3})}},{elemId:"feat-voice-and-text",runAnimation:function(){gsap.to("#f5-cards-row1 > .card",{opacity:1,scale:1,duration:.5,stagger:{each:.3},delay:.5}),gsap.to("#f5-cards-row2 > .card",{opacity:1,scale:1,duration:.5,stagger:{each:.3},delay:1.5})}},{elemId:"feat-customer-journey",runAnimation:function(){gsap.to(["#f6-card1","#f6-card2"],{opacity:1,scale:1,duration:.5,delay:.5}),gsap.to(["#f6-left-line1","#f6-right-line1"],{opacity:1,duration:.5,delay:1}),gsap.to(["#f6-left-ph","#f6-right-ph"],{opacity:1,scale:1,duration:.5,delay:1.5}),gsap.to(["#f6-left-line2","#f6-right-line2"],{opacity:1,duration:.5,delay:2})}},{elemId:"feat-integrate-with",runAnimation:function(){gsap.to("#surface-f7 .toggler",{backgroundColor:"#3448FE",duration:.5,stagger:{each:.3},delay:.5}),gsap.to("#surface-f7 .pin",{left:18,duration:.5,stagger:{each:.3},delay:.5})}},{elemId:"feat-to-be-forgotten",runAnimation:function(){gsap.to("#f8-card1",{opacity:1,scale:1,duration:.5,delay:.5}),gsap.to("#f8-arrow1",{opacity:1,duration:.5,delay:1}),gsap.to("#f8-card2",{opacity:1,scale:1,duration:.5,delay:1.5}),gsap.to("#f8-arrow2",{opacity:1,duration:.5,delay:2}),gsap.to("#f8-card3",{opacity:1,scale:1,duration:.5,delay:2.5})}},{elemId:"feat-agentless-inbound",runAnimation:function(){gsap.to(["#f9-phone","#f9-card"],{opacity:1,scale:1,duration:.5,delay:.5}),gsap.to("#f9-line",{opacity:1,duration:.5,delay:1}),gsap.to("#f9-bubbles > .bubble",{opacity:1,translateY:0,duration:.5,stagger:{each:.3},delay:1.5})}},{elemId:"feat-pre-emptive-outbound",runAnimation:function(){gsap.to("#f10-card1",{opacity:1,scale:1,duration:.5,delay:.5}),gsap.to("#f10-cards > .placeholder",{opacity:1,scale:1,duration:.5,stagger:{each:.3},delay:1}),gsap.to("#f10-card2",{opacity:1,scale:1,duration:.5,delay:1.5}),gsap.to("#f10-line",{opacity:1,duration:.5,delay:2}),gsap.to("#f10-bubble",{opacity:1,translateY:0,duration:.5,delay:2.5})}},{elemId:"feat-accuracy-from-day-one",runAnimation:function(){gsap.to("#f11-timer",{textContent:99,duration:3,snap:{textContent:1},delay:.5}),gsap.to(["#f11-card1","#f11-card2","#f11-card3","#f11-card4"],{opacity:1,scale:1,duration:.5,stagger:{each:.3},delay:1})}},{elemId:"feat-no-data-required",runAnimation:function(){gsap.to(["#f12-card1","#f12-card3"],{opacity:1,scale:1,duration:.5,delay:.5}),gsap.to(["#f12-connect-top","#f12-connect-bottom"],{opacity:1,duration:.5,delay:1}),gsap.to(["#f12-line1","#f12-line2","#f12-line3"],{opacity:1,duration:.5,delay:1.5}),gsap.to("#f12-card2",{opacity:1,scale:1,duration:.5,delay:2})}}];var d=function(t){var e=document.getElementById(t),a=e.parentNode;if(e){e.remove();var o=document.createElement("div");o.classList.add("mo-surface-img"),"hero-phone-surface"===t&&o.classList.add("phone"),o.style.backgroundImage='url("'.concat("files/mobile","/").concat(t,'.png")'),a.appendChild(o)}};document.addEventListener("DOMContentLoaded",(function(){var a,o,i,r,l,p,u,g;window.mobileAndTabletCheck=function(){var t,e=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)/parseFloat(getComputedStyle(document.querySelector("html"))["font-size"]),a=!1;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(a=!0),a||e<64},function(){if(mobileAndTabletCheck()){var a=document.getElementById("header");e(a);var o=null,n=null,i=0,r=0;window.addEventListener("scroll",(function(){o||(o=setTimeout((function(){o=null,requestAnimationFrame((function(){var o=window.pageYOffset||document.documentElement.scrollTop;o>i?(n===t?r+=o-i:(n=t,r=0),r>50&&function(t){t&&t.classList.contains("highlighted")&&t.classList.remove("highlighted")}(a)):(n="up",e(a)),i=o<=0?0:o}))}),100))}),!1)}else gsap.to("main",{scrollTrigger:{trigger:"main",start:"20",end:"bottom+=1000",onToggle:function(t){var e=t.isActive,a=document.getElementById("header");a&&(e?requestAnimationFrame((function(){return a.classList.add("highlighted")})):requestAnimationFrame((function(){return a.classList.remove("highlighted")})))}}})}(),function(){var t,e=new n;(t=new s).markToResize();var a,o=document.getElementById("hero"),i=!1;if(mobileAndTabletCheck())return gsap.to("#hero-phone-surface",{translateY:0,opacity:1,duration:.5,delay:0,ease:"power4"}),e.play(),void t.play();ScrollTrigger.create({trigger:o,start:"top bottom-=200px",end:"bottom top+=520px",once:!1,onToggle:function(a){var o=a.isActive;o&&!i&&(i=!0,gsap.to("#hero-carousel",{translateY:0,opacity:1,duration:.5,ease:"power4"}),gsap.to("h1",{translateY:0,opacity:1,duration:.5,delay:.5,ease:"power4"},"<"),gsap.to("#hero-subtitle",{translateY:0,opacity:1,duration:.5,delay:1,ease:"power4"}),gsap.to("#hero-buttons > .button",{translateY:0,opacity:1,duration:.5,ease:"power4",delay:1.5,stagger:{each:.3}}),gsap.to("#hero-phone-surface",{translateY:0,opacity:1,duration:.5,delay:1.5,ease:"power4"})),o?(e.play(),t&&t.play()):(e.pause(),t&&t.pause())}}),window.addEventListener("resize",(function(){a||(a=setTimeout((function(){a=null,t&&t.markToResize()}),100))}),!1)}(),mobileAndTabletCheck()||(g=document.getElementById("brands"),ScrollTrigger.create({trigger:g,start:"top bottom-=200px",end:"bottom top",once:!0,onToggle:function(t){t.isActive&&(gsap.to("#brands-title",{translateY:0,opacity:1,duration:.5}),gsap.to("#brands-cards > .card",{translateY:0,opacity:1,duration:.5,stagger:{each:.1}}))}}),function(){var t=document.getElementById("about");ScrollTrigger.create({trigger:t,start:"top bottom-=200px",end:"bottom top",once:!0,onToggle:function(t){if(t.isActive){var e=document.getElementById("about-counter-text1"),a=document.getElementById("about-counter-text2");e&&(e.innerHTML=e.innerText.split(",").join("")),a&&(a.innerHTML=a.innerText.split(",").join("")),gsap.to("#about-title",{translateY:0,opacity:1,duration:.5}),gsap.to("#about-text",{translateY:0,opacity:1,duration:.5,delay:.5}),gsap.to("#about-counters > li",{translateY:0,opacity:1,duration:.5,delay:1,stagger:{each:.3}}),gsap.from(["#about-counter-text1","#about-counter-text2","#about-counter-text3"],{textContent:0,duration:6,ease:"power1.out",snap:{textContent:1},stagger:{each:1,onUpdate:function(){this.targets()[0].innerHTML=Math.ceil(this.targets()[0].textContent).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}})}}})}(),function(){var t=document.getElementById("case-studies");ScrollTrigger.create({trigger:t,start:"top bottom-=200px",end:"bottom top",once:!0,onToggle:function(t){t.isActive&&(gsap.to("#case-studies-container",{translateY:0,opacity:1,duration:.5}),gsap.to("#case-studies-subtitle",{translateY:0,opacity:1,duration:.5}),gsap.to("#case-studies-title",{translateY:0,opacity:1,duration:.5,delay:.5}),gsap.to("#case-studies-text",{translateY:0,opacity:1,duration:.5,delay:1}),gsap.to("#case-studies-image",{translateX:0,opacity:1,duration:.8,delay:1.5}),gsap.to("#case-studies-cards-cards > li",{translateY:0,opacity:1,duration:.5,delay:2.5,stagger:{each:.3}}))}})}(),c.forEach((function(t){var e=t.elemId,a=t.runAnimation;ScrollTrigger.create({trigger:"#".concat(e),start:"top bottom-=100px",end:"bottom top",once:!0,toggleClass:"visible",onToggle:function(t){t.isActive&&a()}})})),function(){var t=document.getElementById("agentless");ScrollTrigger.create({trigger:t,start:"top bottom-=200px",end:"bottom top",once:!0,onToggle:function(t){t.isActive&&(gsap.to("#agentless-subtitle",{translateY:0,opacity:1,duration:.5}),gsap.to("#agentless-title",{translateY:0,opacity:1,duration:.5,delay:.5}),gsap.to("#agentless-features > li",{translateX:0,opacity:1,duration:.5,delay:1,stagger:{each:.3}}),gsap.to("#agentless-cards-middle",{scale:1,opacity:1,duration:.5,delay:2.5}),gsap.to("#agentless-cards-chain-middle",{opacity:.3,duration:.5,delay:3}),gsap.to("#agentless-cards-top-middle",{opacity:1,scale:1,duration:.5,delay:3.5}),gsap.to(["#agentless-cards-chain-top-left","#agentless-cards-chain-top-right"],{opacity:.3,duration:.5,delay:4}),gsap.to(["#agentless-cards-top-left","#agentless-cards-top-right"],{opacity:1,scale:1,duration:.5,delay:4.5}),gsap.to(["#agentless-cards-chain-bottom-left","#agentless-cards-chain-bottom-right","#agentless-cards-chain-bottom-middle"],{opacity:.3,duration:.5,delay:5}),gsap.to(["#agentless-cards-bottom-left","#agentless-cards-bottom-middle","#agentless-cards-bottom-right"],{opacity:1,scale:1,duration:.5,delay:5.5}))}})}(),function(){var t=document.getElementById("go-live");ScrollTrigger.create({trigger:t,start:"top bottom-=200px",end:"bottom top",once:!0,onToggle:function(t){t.isActive&&gsap.to("#go-live-container",{translateY:0,opacity:1,duration:.5})}})}(),function(){var t=document.getElementById("footer");ScrollTrigger.create({trigger:t,start:"top bottom-=100px",end:"bottom top",once:!0,onToggle:function(t){t.isActive&&(gsap.to(["#footer-separator"],{opacity:1,duration:.5}),gsap.to("#footer-terms",{opacity:1,duration:.5,delay:.5}),gsap.to("#footer-socials",{opacity:1,duration:.5,delay:1}),gsap.to("#footer-cp",{opacity:1,duration:.5,delay:1.5}))}})}()),r=(i=document).getElementById,l=i.createElement,p=i.getElementsByTagName,u="typef_orm_share",r.call(i,u)||((a=l.call(i,"script")).id=u,a.src="https://embed.typeform.com/embed.js",(o=p.call(i,"script")[0]).parentNode.insertBefore(a,o)),mobileAndTabletCheck()&&function(){for(var t=1;t<13;t+=1)d("surface-f".concat(t));d("surface-agentless")}()}))})();