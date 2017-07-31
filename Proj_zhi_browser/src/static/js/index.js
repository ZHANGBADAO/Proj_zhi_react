import "./jquery.min";

//轮播图------------------------------------
 /* var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay : 2000,
	speed:500,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    paginationClickable :true,
    autoplayDisableOnInteraction : false,
    
 });  */
//向下滚动 固定导航----------------------------------
 $(window).scroll(function(){
		let scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
		if (scrolltop>=250) {
			$("header").css({top:"-1.6rem",transition:"0.5s"});
			$("nav").css({top:"0",transition:"0.5s"});
		}else{
			$("header").css({top:"0"});
			$("nav").css({top:"1.6rem"});
		}
});	 
		
