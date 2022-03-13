  //给页面绑定一个滚动条事件

  $(document).scroll(function(){
    //获取到当前滚动条滚动的位置

   var distance = $(this).scrollTop()
    //当位置 > 200 就显示 返回顶部，小于200 就显示

   if (distance >= 200){
        //显示返回顶部

       $("#back").css({transform:'scale(1)',opacity:1});

   } else{
        //不显示

       $("#back").css({ transform:'scale(0)',opacity:0});
   }
})