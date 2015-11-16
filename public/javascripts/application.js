$(function() {
  console.log("Ruff ruff");


  $("#paw-left").click(function(){
    console.log("LEFT!!!!");
    location.href= "/";
  });

  $("#paw-right").click(function(){
    console.log("Right");
    location.href= "/";
  });

  // var topHeight = 100;
  // var leftWidth = 500;
  // function startMoving(deltaDistance)
  // {
  //     setInterval(function()
  //         {
  //         leftWidth += deltaDistance;         
          
  //         $("#jam").css("left",leftWidth + "px");
  //         }, 
  //         10);

  //     setInterval(function()
  //      {          
  //         deltaDistance /= 1.4;
  //      }, 
  //      200);
  // }
  // var hasMouseMoved = false;
  // var originLeft;
    // $(document).on("mousemove",function(event){
    //     var mouseLeft = event.screenX;
    //     if (hasMouseMoved === false)
    //     {
    //         originLeft = mouseLeft;
    //     }

    //     hasMouseMoved = true;
        
    //     $("#jam").css("left",mouseLeft);
    //     if (mouseLeft < originLeft - 100)
    //     {
    //         $("#posX").text("You have picked left!!!");
    //         $(document).off("mousemove");
    //         startMoving(-8);
    //     }
    //     else if (mouseLeft > originLeft + 100)
    //     {
    //         $("#posX").text("You have picked right!!!");
    //         $(document).off("mousemove");
    //         startMoving(8);
    //     }
    // });   
});