var count = 0;

function stopSliding() {
  count++;
  var slide = "slider" + count;
  var sliderCurrent = document.getElementById(slide);

  var slide = "slider" + (count + 1);
  var sliderAbove = document.getElementById(slide);

  if (count == 1) {
    var sliderBelow = sliderCurrent;
  } else {
    var slide = "slider" + (count - 1);
    var sliderBelow = document.getElementById(slide);
  }

  var left = parseInt(window.getComputedStyle(sliderCurrent).getPropertyValue("left"))
  var width = parseInt(window.getComputedStyle(sliderCurrent).getPropertyValue("width"))
  var leftBelow = parseInt(window.getComputedStyle(sliderBelow).getPropertyValue("left"))

  sliderCurrent.classList.remove('animate');
  sliderCurrent.style.left = left + "px";

  var diffrence = left - leftBelow;
  var absDiffrence = Math.abs(diffrence);
  var newWidth = (width - absDiffrence).toString().concat("px");
  sliderCurrent.style.width = newWidth;
  sliderAbove.style.width = newWidth;
  sliderAbove.style.visibility ='visible';

  if(diffrence > width || diffrence<-width){
    var score = "score:" + count
    alert(score)
    location.reload()
  }

}
