var i = 0;
var txt = 'I\'m Naya Al Tahan, and I\'m almost graduating as a Software Engineer from VIA University College, in Horsens, Denmark. I\'m also a Student Backend Developer with the LEGO Group. ';
var speed = 50;


(function () {
  typeWriter();
})();


function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName("lead")[0].innerHTML ;
    document.getElementById("mainText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

