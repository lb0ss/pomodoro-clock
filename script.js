$(document).ready(function(){
  var buzzer = $("#alert")[0];
  var count = parseInt($("#numclock").html());
  var breakCount = parseInt($("#numbreak").html());

  $("#reset").hide();
 
  $("#start").click(function(){
     var counter = setInterval(timer,1000);
      count*= 60;
      breakCount*= 60;
      $("#start, #minus5clock, #add5clock, #minus5break, #add5break, #numbreak").hide();
      function timer () {
            count-=1;
           if (count === 0) {
             buzzer.play();
             clearInterval(counter);
             $("#numclock").hide();
             var breakCounter = setInterval(breakTimer, 1000);
           }
          if(count%60 >= 10) {
         $("#numclock").html(Math.floor(count/60)+ ": "+count%60);
      } else {
        $("#numclock").html(Math.floor(count/60)+ ": "+ "0" + count%60);
      }
             function breakTimer() {
                $("#numbreak").show();
                
                breakCount-=1;
                if (breakCount === 0) {
                  clearInterval(breakCounter);
                  $("#reset").show();
                  $("#numbreak").hide();
                  buzzer.play();
                }
               
             if(breakCount%60 >= 10) {
            $("#numbreak").html(Math.floor(breakCount/60)+ ": "+breakCount%60);
            } else {
            $("#numbreak").html(Math.floor(breakCount/60)+ ": "+ "0" + breakCount%60);
           }
              }
          }

  });
  
 $("#reset").click(function(){
    count = 25;
    breakCount = 10;
    $("#numclock").html(count);
    $("#numbreak").html(breakCount);
    $("#numclock").show();
    $("#numbreak").show();
    $("#minus5clock, #add5clock, #minus5break, #add5break, #start").show();
    $("#reset").hide();
 })

  
  $("#minus5clock").click(function(){
    if (count > 5) {
    count = count - 5;
    $("#numclock").html(count);  
    }
  });
  
  $("#add5clock").click(function(){
    count = count + 5;
    $("#numclock").html(count);
  });
  
  $("#minus5break").click(function(){
    if(breakCount > 5) {
    breakCount = breakCount - 5;
    $("#numbreak").html(breakCount);
    };
 
  });
  $("#add5break").click(function(){
    breakCount = breakCount + 5;
    $("#numbreak").html(breakCount);
  });
});