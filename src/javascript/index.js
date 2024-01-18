import * as projectsHandler from '../javascript/projectsHandler';

var i = 0;
var txt = "My name is Naya, and I make games. I'm primarily a programmer, but I love trying out different areas in game dev, "+
 "such as designing, and making 3D models. I'm a games technology graduate, and currently making LEGO games at the LEGO Group. "+
 "Besides that, I help organize events and meetups for women and gender minorities in the games industry in Denmark, as part of WiG DK.";
var speed = 20;


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

