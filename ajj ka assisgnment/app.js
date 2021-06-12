var color1 =[
"red","lightblue","green","orange"
]
var color2=[
    "purple","pink","indigo","violet"
]
var color3=[
"brown","darkblue","dark cyan","blue"
]
var color4=[
    "cyan","lightgreen","lightpurple","golden"
]



var a =document.getElementById("slide1").style.backgroundColor=color1[0];
document.getElementById("slide2").style.backgroundColor=color2[0]
document.getElementById("slide3").style.backgroundColor=color3[0]
document.getElementById("slide4").style.backgroundColor=color4[0]

var i =0
function my() {
    
    document.getElementById("slide1").style.backgroundColor=color1[i]
i=i+1; color1.length;

}
setInterval(my,2000)
var j=0
function second() {
    document.getElementById("slide2").style.backgroundColor=color2[i]
    j=j+1; color2.length;
    
}
setInterval(second,2000)
var k ;
function thrid() {
    document.getElementById("slide3").style.backgroundColor=color3[i]
    k=k+1; color3.length;
    
}
setInterval(thrid,2000)
var l;
function forth() {
    document.getElementById("slide4").style.backgroundColor=color4[i]
    l=l+1; color4.length;
    
}

setInterval(forth,2000)





var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 4000); 
}