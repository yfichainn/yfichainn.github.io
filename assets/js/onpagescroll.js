var lastId,topMenu=$("nav.onepage, .footer-menu.onepage"),topMenuHeight=$("header").height();menuItems=topMenu.find("a"),scrollItems=menuItems.map(function(){var href=$(this).attr("href");if(href.startsWith('#')){var item=$(href);if(item.length){return item;}}});$(window).scroll(function(){var fromTop=$(this).scrollTop()+topMenuHeight;var cur=scrollItems.map(function(){if($(this).offset().top<fromTop)
return this;});cur=cur[cur.length-1];var id=cur&&cur.length?cur[0].id:"";if(lastId!==id){lastId=$();menuItems.parent().removeClass("active").end().filter("[href=#"+id+"]").parent().addClass("active");}
$(window).scroll(function(){if($(window).scrollTop()>topMenuHeight){$("header").addClass('fixed');}else{$("header").removeClass('fixed');}});});