console.log("Hello World!");

//nav bar resizing and position indicator
//citation//https://stackoverflow.com/questions/26819675/navbar-highlight-for-current-page
window.onscroll = function () {
    //nav bar resizing
    var myNav = document.getElementById("nav-bar");

    if(document.body.scrollTop == 0){
        myNav.classList.add("li");
    }
    else{
        myNav.classList.remove("li");
    }

    if (document.body.scrollTop >= 500 ) {
        myNav.classList.remove("scroll-before");
        myNav.classList.add("scroll-after");
    }
    else {
        myNav.classList.remove("scroll-after");
        myNav.classList.add("scroll-before");
    }

    //position indicator
    var myNavBlock1 = document.getElementById('li-1');
    var myNavBlock2 = document.getElementById('li-2');
    var myNavBlock3 = document.getElementById('li-3');
    var myNavBlock4 = document.getElementById('li-4');
    var myNavBlock5 = document.getElementById('li-5');
    //initial position: at li-1
    myNavBlock1.classList.add("active-nav");

    if (document.body.scrollTop >= 0 && document.body.scrollTop <= 600) {
      myNavBlock1.classList.add("active-nav");
      myNavBlock2.classList.remove("active-nav");
      myNavBlock3.classList.remove("active-nav");
      myNavBlock4.classList.remove("active-nav");
      myNavBlock5.classList.remove("active-nav");
    }
    else if (document.body.scrollTop > 600 && document.body.scrollTop <= 1000  ) {
        myNavBlock1.classList.remove("active-nav");
        myNavBlock2.classList.remove("active-nav");
        myNavBlock3.classList.remove("active-nav");
        myNavBlock4.classList.remove("active-nav");
        myNavBlock5.classList.remove("active-nav");
        myNavBlock2.classList.add("active-nav");
    }
    else if (document.body.scrollTop > 1000 && document.body.scrollTop <= 1600  ) {
        myNavBlock1.classList.remove("active-nav");
        myNavBlock2.classList.remove("active-nav");
        myNavBlock3.classList.remove("active-nav");
        myNavBlock4.classList.remove("active-nav");
        myNavBlock5.classList.remove("active-nav");
        myNavBlock3.classList.add("active-nav");
    }
    else if (document.body.scrollTop > 1600 && document.body.scrollTop <= 2200  ) {
        myNavBlock1.classList.remove("active-nav");
        myNavBlock2.classList.remove("active-nav");
        myNavBlock3.classList.remove("active-nav");
        myNavBlock4.classList.remove("active-nav");
        myNavBlock5.classList.remove("active-nav");
        myNavBlock4.classList.add("active-nav");
    }
    else if (document.body.scrollTop > 2200 && document.body.scrollTop < 5000) {
        myNavBlock1.classList.remove("active-nav");
        myNavBlock2.classList.remove("active-nav");
        myNavBlock3.classList.remove("active-nav");
        myNavBlock4.classList.remove("active-nav");
        myNavBlock5.classList.remove("active-nav");
        myNavBlock5.classList.add("active-nav");
    }
}

//smooth scrolled
//citation:
//https://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery
var myNavBlock1 = document.getElementById('li-1');
var myNavBlock2 = document.getElementById('li-2');
var myNavBlock3 = document.getElementById('li-3');
var myNavBlock4 = document.getElementById('li-4');
var myNavBlock5 = document.getElementById('li-5');

myNavBlock1.addEventListener('click', smoothscroll1);
myNavBlock2.addEventListener('click', smoothscroll2);
myNavBlock3.addEventListener('click', smoothscroll3);
myNavBlock4.addEventListener('click', smoothscroll4);
myNavBlock5.addEventListener('click', smoothscroll5);

function smoothscroll1(){
  var count = 0;
  var divy = myNavBlock1.offsetTop;
  var difference = divy - window.pageYOffset;
  var speed = (difference >= 0) ? 5 : (-5);
  difference = Math.abs(difference);
  var setinterval =setInterval(function() {
    if(count > difference){
      clearInterval(setinterval);
    }
      window.scrollBy(0, speed);
      count = count + 5;
    }, 0.01)
}

function smoothscroll2(){
  var count = 0;
  var divy = myNavBlock2.offsetTop * 35.5;
  var difference = divy - window.pageYOffset;
  var speed = (difference >= 0) ? 5 : (-5);
  difference = Math.abs(difference);
  var setinterval = setInterval(function() {
    if(count > difference){
      clearInterval(setinterval);
    }
      window.scrollBy(0, speed);
      count = count + 5;
    }, 0.01)
}

function smoothscroll3(){
  var count = 0;
  var divy = myNavBlock3.offsetTop * 52;
  var difference = divy - window.pageYOffset;
  var speed = (difference >= 0) ? 5 : (-5);
  difference = Math.abs(difference);
  var setinterval = setInterval(function() {
    if(count > difference){
      clearInterval(setinterval);
    }
      window.scrollBy(0, speed);
      count = count + 5;
    }, 0.01)
}

function smoothscroll4(){
  var count = 0;
  var divy = myNavBlock4.offsetTop * 85;
  var difference = divy - window.pageYOffset;
  var speed = (difference >= 0) ? 5 : (-5);
  difference = Math.abs(difference);
  var setinterval = setInterval(function() {
    if(count > difference){
      clearInterval(setinterval);
    }
      window.scrollBy(0, speed);
      count = count + 5;
    }, 0.01)
}

function smoothscroll5(){
  var count = 0;
  var divy = myNavBlock5.offsetTop * 105;
  var difference = divy - window.pageYOffset;
  var speed = (difference >= 0) ? 5 : (-5);
  difference = Math.abs(difference);
  var setinterval = setInterval(function() {
    if(count > difference){
      clearInterval(setinterval);
    }
      window.scrollBy(0, speed);
      count = count + 5;
    }, 0.01)
}

//Carousel,
//citation:https://github.com/codepo8/simple-carousel
var img = document.querySelector('.carouselbox');
var next = img.querySelector('.next');
var prev = img.querySelector('.prev');
//redirect
var idx = 0;
var items = img.querySelectorAll('.content li');
var amount = items.length;
var current = items[0];
img.classList.add('active');
// redirect through the carousel
function redirect(direction) {
  // hide the old current list item
  current.classList.remove('current');
  idx = (idx + direction) % amount;
  if(idx < 0){
    idx = amount - 1;
  }
  current = items[idx];
  current.classList.add('current');
}
// add event handlers to buttons
next.addEventListener('click', function(ev) {
  redirect(1);
});
prev.addEventListener('click', function(ev) {
  redirect(-1);
});
redirect(0);




//modal
//citation: w3c school
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img
var modal = document.getElementById('modal');
var img1 = document.getElementById('mdimg1');
var modalImg1 = document.getElementById("modalimg1");
img1.addEventListener('click', function(ev){
    modal.style.display = "block";
    modalImg1.src = "http://2.bp.blogspot.com/_NtgXlrcvXZA/TGCOQtMRf4I/AAAAAAAAm5I/L2InJPP9yx8/s1600/MENU+-+CHICAGO+-+LIDO+RESTAURANT+-+CLARK+AND+WASHINGTON+-+MENU+INSIDE+-+1944.jpg";
});

var img2 = document.getElementById('mdimg2');
var modalImg2 = document.getElementById("modalimg2");
img2.addEventListener('click', function(ev){
    modal.style.display = "block";
    modalImg1.src = "http://www.bottleneckmgmt.com/blog/wp-content/uploads/Howells-and-Hood-Restaurant-Week-Menu.jpg";
});

var img3 = document.getElementById('mdimg3');
var modalImg3 = document.getElementById("modalimg3");
img3.addEventListener('click', function(ev){
    modal.style.display = "block";
    modalImg1.src = "http://3.bp.blogspot.com/-heUbf6XQ8lU/VGkGvE_kkrI/AAAAAAAA-Zs/2XZKHm6kFxk/s1600/MENU%2B-%2BCHICAGO%2B-%2BDRAKE%2BHOTEL%2B-%2BROOM%2BSERVICE%2B-%2BDINNER%2B-%2B1930s.jpg";
});
var span = document.getElementsByClassName("close")[0];
span.addEventListener('click', function(ev) {
    modal.style.display = "none";
});
