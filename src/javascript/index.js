import * as projectsHandler from '../javascript/projectsHandler';

var i = 0;
var txt = "I’m Naya Al Tahan, and I'm almost graduating as a Game Developer from the Games MSc Technology Track from ITU, Copenhagen, Denmark. \nNext to my studies, I work as a student Unity developer at The LEGO Group. "
var speed = 60;


(function () {
  typeWriter();
  projectsHandler.CreateGamesAsCards()
  projectsHandler.CreateArvrAsCards()
  projectsHandler.CreateMobileApplicationsAsCards()
  projectsHandler.CreateWebsitesAsCards()
})();


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("mainText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

