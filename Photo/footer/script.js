$(function(){
  const Z_DISTANCE = -1000;
  var cnt = $(".board").length;
  var worldZ = 0;
  
  /*** ボードの初期位置 ***/
  for(var i = 2; i <= cnt+1; i++){
    if(i % 2 == 1){
      $(".board:nth-child(" + i + ")").css("transform", "translateX(-20%) translateY(-50%) translateZ(" + (-1000 + Z_DISTANCE * i) +"px)");  
    } else {
      $(".board:nth-child(" + i + ")").css("transform","translateX(20%) translateY(-50%) translateZ(" + (-1000 + Z_DISTANCE * i) + "px)");  
    }
  }
  
  /*** 手前に向かって移動させる ***/
  setInterval(function(){
    worldZ += 4;
    $(".world").css("transform","translateZ(" + worldZ + "px)");
    if(worldZ > 44000){
      worldZ = 0
    }
  },10);
});