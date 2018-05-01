addArrowKeys();
console.log("arrow keys added to page");


function addArrowKeys(){

  var next = document.querySelector("a[class*='next'], a[rel*='next']");
  var prev = document.querySelector("a[class*='prev'], a[rel*='prev']");

  document.addEventListener("keypress", function(event){
      if (event.key == "ArrowRight" && next !=null){
        document.location.href = next.href;
      }
      else if (event.key == "ArrowLeft" && prev != null) {
        document.location.href = prev.href;
      }
  });
}