var count = 0;
//$("h2").text("start play here");
$(".baggor").click(function(){
   count = count+1;
  // $(this).text("x");

  if(count%2==0)
 {
     $(this).text("0");
 }
 else
 {
     $(this).text("X");
 }
 })
