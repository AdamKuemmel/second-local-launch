jQuery(function(e){e.fn.dmpro_before_after_slider=function(){const t=e(this),i=e.extend({default_offset_pct:.5,orientation:"horizontal",before_label:!1,after_label:!1,move_slider_on_hover:!1,move_with_handle_only:!1,click_to_move:!0},t.data("options"));var r=i.offset/100,o="vertical"===i.direction?"down":"left",a="vertical"===i.direction?"up":"right";const n=e(`<div class="dmpro_before_after_slider_wrapper dmpro_before_after_slider_${i.direction}"></div>`),c=e(`<img src="${i.before_image}" alt="${i.before_image_alt}" class="dmpro_before_after_slider_before"/>`);n.append(c);const s=e(`<img src="${i.after_image}" alt="${i.after_image_alt}" class="dmpro_before_after_slider_after"/>`);n.append(s),c.on("load",function(){h(r)});const d=e("<div class='dmpro_before_after_slider_overlay'></div>"),l=e(`<div class='dmpro_before_after_slider_before_label dmpro_before_after_slider_label' data-content="${i.before_label}"></div>`),_=e(`<div class='dmpro_before_after_slider_after_label dmpro_before_after_slider_label' data-content="${i.after_label}"></div>`);d.append(l),d.append(_),n.append(d);const f=e("<div class='dmpro_before_after_slider_handle'></div>");f.append(`<span class="dmpro_before_after_slider_${o}_arrow"></span>`),f.append(`<span class="dmpro_before_after_slider_${a}_arrow"></span>`),n.append(f),t.html(n);var p=function(e){let t=Math.ceil(c[0].getBoundingClientRect().width),i=Math.ceil(c[0].getBoundingClientRect().height);return{mh:Math.floor(c[0].getBoundingClientRect().height),w:t+"px",h:i+"px",cw:Math.ceil(e*t)+"px",ch:Math.ceil(e*i)+"px"}};function h(e){const t=p(e);"vertical"===i.direction?f.css("top",t.ch):f.css("left",t.cw),function(e){"vertical"===i.direction?(c.css("clip",`rect(0, ${e.w}, ${e.ch}, 0)`),s.css("clip",`rect(${e.ch}, ${e.w}, ${e.h}, 0)`),l.css("clip",`rect(0, ${e.w}, ${e.ch}, 0)`),_.css("clip",`rect(${e.ch}, ${e.w}, ${e.h}, 0)`)):(c.css("clip",`rect(0, ${e.cw}, ${e.h}, 0)`),s.css("clip",`rect(0, ${e.w}, ${e.h}, ${e.cw})`),l.css("clip",`rect(0, ${e.cw}, ${e.h}, 0)`),_.css("clip",`rect(0, ${e.w}, ${e.h}, ${e.cw})`)),n.css("height",e.h)}(t)}var v=function(e,t){var r,o,a,n="vertical"===i.direction?(t-u)/$:(e-m)/b;return r=n,o=0,a=1,Math.max(o,Math.min(a,r))},m=0,u=0,b=0,$=0,w=function(e){(e.distX>e.distY&&e.distX<-e.distY||e.distX<e.distY&&e.distX>-e.distY)&&"vertical"!==i.direction?e.preventDefault():(e.distX<e.distY&&e.distX<-e.distY||e.distX>e.distY&&e.distX>-e.distY)&&"vertical"===i.direction&&e.preventDefault(),t.addClass("active"),m=t.offset().left,u=t.offset().top,b=c.width(),$=c.height()},g=function(e){t.hasClass("active")&&h(r=v(e.pageX,e.pageY))},X=function(){t.removeClass("active")},Y=i.move_with_handle_only?f:t;Y.on("movestart",w),Y.on("move",g),Y.on("moveend",X),i.move_slider_on_hover&&(t.on("mouseenter",w),t.on("mousemove",g),t.on("mouseleave",X)),f.on("touchmove",function(e){e.preventDefault()}),t.find("img").on("mousedown",function(e){e.preventDefault()}),i.click_to_move&&t.on("click",function(e){m=t.offset().left,u=t.offset().top,b=c.width(),$=c.height(),h(r=v(e.pageX,e.pageY))}),h(r),e(window).on("resize",function(){h(r)})},e(".dmpro_before_after_slider").each(function(){e(this).find(".dmpro_before_after_slider_container").dmpro_before_after_slider()})});