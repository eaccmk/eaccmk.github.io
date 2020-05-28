//jQuery.noConflict();
$(document).ready(function($){
$("#pick").on("click", getRandomName);
});

var names = new Array(
    "Names",
    "Alpha",
    "Beta",
    "Cat",
    "Dog",
    "Gama",
    "eaccmk",
    "Chelsea",
);

//$("#pick").on("click", getRandomName);

var doneNames = new Array()

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomName(){
console.log("clicked!");
  
  
  var namesLength = names.length;
  console.log("names: ", namesLength);
  if (namesLength > 0) {
    $("#pick").html("Go")
    // var nextNameIdx = getRandomInt(namesLength);
    // nextName = names[nextNameIdx];
    //  $("#next").html(nextName)
     count = 0;                
    //setTimeout(clearInterval, 2000)
    flipper = setInterval(flipThrough, 50)
    
    
    console.log("done filtering");
    return;
  } 
  names = doneNames
  doneNames = new Array()
  $("#done").html("<ul class=\"single-before\"></ul>");
  $("#pick").html("Again!")
  $("#next").html("Done!")
}

function generateDoneNamesDOM(doneNames){
  var doneNamesDOM = ""
  doneNames.forEach(name => {
    doneNamesDOM = doneNamesDOM + "<li>" + name + "</li>"
  });
  //console.log(doneNamesDOM)
  return doneNamesDOM;
}

function flipThrough(){
 
  var namesLength = names.length;
  if (namesLength > 0) {
    nextNameIdx = getRandomInt(namesLength);
    nextName = names[nextNameIdx];
    $("#next").html(nextName);
    count++;
    if(count >= 20){
      clearInterval(flipper)
      doneNames.push(nextName);
      console.log("doneNames:", doneNames.length)
      $("#done ul").html(generateDoneNamesDOM(doneNames));
      names = names.filter(x => !doneNames.includes(x));
      return
    }
  }
  
}

$('#pick.confetti-button').on('click', function(){  
  function random(max){
      return Math.random() * (max - 0) + 0;
  }

  var c = document.createDocumentFragment();
  for (var i=0; i<100; i++) {
    var styles = 'transform: translate3d(' + (random(500) - 250) + 'px, ' + (random(200) - 150) + 'px, 0) rotate(' + random(360) + 'deg);\
                  background: hsla('+random(360)+',100%,50%,1);\
                  animation: bang 700ms ease-out forwards;\
                  opacity: 0';
      
    var e = document.createElement("i");
    e.style.cssText = styles.toString();
    c.appendChild(e);
}
// document.body.appendChild(c);
  $(this).append(c);
})

var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
