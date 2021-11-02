let projectLink = "Source Code"
let backend = "Source Code: Backend"
let frontend = "Source Code: Frontend"
let database = "Source Code: Database"
let gameLink = "Game Link"
let arvr = [
    {
        "Title": "AR Brick Breaker Game",
        "Description": "A simple Brick Breaker Game that uses AR to control the paddle, the games is marker based, and developed in Unity using the Vuforia Marker based package",
        "ProjectLinks": [{
            "description" : projectLink,
            "link" : "https://github.com/nayaaltahan/mix1-assignment1"
          }
        ],
        "VideoId": "wFPTo9W-S78"
    },
    {
        "Title": "Guided Virtual Travel in AR",
        "Description": "The application enables the user to use AR to walk into different cities, through portals. Upon portal entry, the user views a 360 video with Audio to get a guided tour of the selected city. The project was developed in Unity and it uses Google ARCore.",
        "ProjectLinks": [{
            "description" : projectLink,
            "link" : "https://github.com/nayaaltahan/mix1-assignment22"
          }
        ],
        "VideoId": "LbZpk2n9XHo"
    },
    {
        "Title": "Beat Saber Recreation",
        "Description": "This is a quick recreation of the VR game, Beat Saber. It's built in Unity for Oculus Quest using the Oculus Integration Package.",
        "ProjectLinks": [{
            "description" : projectLink,
            "link" : "https://github.com/nayaaltahan/mix1-assignment33"
          }
        ],
        "VideoId": "Zua3fIU46_o"
    },
    {
        "Title": "VR Escape Room",
        "Description": "Escape room targeted for smaller kids, where they solve some mysteries to find the key and win the game. The game contains 4 steps to complete, and it's in VR. It's built in Unity for Oculus Quest using the Oculus Integration Package.",
        "ProjectLinks": [{
            "description" : projectLink,
            "link" : "https://github.com/nayaaltahan/mix1-assignment4"
          }
        ],
        "VideoId": "LMlsVQx5Be0"
    }
];
let websites = [
    {
        "Title": "Website for Bed and Breakfast",
        "Description": "Commercial website for a small bed and breakfast, where the user is able to view details about the place, the stay and the location. The website was developed using ASP.NET MVC",
        "ProjectLinks": [{
            "description" : projectLink,
            "link" : "https://github.com/nayaaltahan/rytterskolens_bb_website"
          }
        ],
        "VideoId": "PNWBnJ9CqzI"
    },
    {
        "Title": "Flights Tracker Website",
        "Description": "ASP.NET MVC based web application, that uses Chart.JS to display charts of flights related data. The project is hosted on the cloud using AWS",
        "ProjectLinks": [{
            "description" : backend,
            "link" : "https://github.com/nayaaltahan/SEP6_backend"
          },
          {
            "description" : frontend,
            "link" : "https://github.com/nayaaltahan/SEP6_frontend"
          }
        ],
        "VideoId": "dD1VZekg7y8"
    }
];
let mobileApplications = [
    {
        "Title": "Dothraki Translator",
        "Description": "English to Dothraki Translator, that uses a public API to translate english words and phrases to Dothraki. The application saves translation history, and the user can share the translations to other applications.",
        "ProjectLinks": [{
            "description" : projectLink,
            "link" : "https://github.com/nayaaltahan/GOT_Dothraki-English_Translator"
          }
        ],
        "VideoId": "XHHHlnzu6Qk"
    },
    {
        "Title": "Plant Management Application",
        "Description": "An application that tracks plants using a sensors device. the device tracks light, humidity, temperature and CO2 levels to make sure its within the limits that the end-user has specified. The user can view the plant data and the data will show in red in case it's not within the limits. The application keeps the data stored in a database and gets it through an API built in Java. The Data has a data warehouse that can be viewed though PowerBI, I was responsible of the backend and data warehousing parts of the project",
        "ProjectLinks": [{
            "description" : backend,
            "link" : "https://github.com/mungiu/SEP4_PMI"
          },
          {
            "description" : database,
            "link" : "https://github.com/nayaaltahan/DB_SEP4_PMI"
          }
        ],
        "VideoId": "AjJiwaHSCUU"
    }
];
let games = [
    {
        "Title": "Pink Panther Recreation",
        "Description": "The game is a recreation of the Boss level in Pink Panther: Pinkadelic Pursuit. The game is developed in Unity, and the assets asnd animations are developed in Adobe",
        "ProjectLinks": [{
            "description" : projectLink,
            "link" : "https://github.com/nayaaltahan/GMD-Project"
          },
          {
            "description" : gameLink,
            "link" : "https://nayaaltahan.github.io/GMD-Project/"
          }
        ],
        "VideoId": "bjgc2nlqGIk"
    }, 
    {
        "Title": "Boon Balloon",
        "Description": "BOON BALLOON is a 2-player cooperative 2D game about a hot-air balloon controlled by an Elephant, LOON, and a Monkey, BOON, where one player will tilt their phone to help BOON move the Balloon left and right, and the other player will shake their phone to help LOON blow into the Balloon.",
        "ProjectLinks": [{
            "description" : projectLink,
            "link" : "https://github.com/nayaaltahan/prototype6"
          }
        ],
        "VideoId": "rwMPcyVjg3Q"
    }, 
    {
        "Title": "Crossy Road Demake",
        "Description": "Crossy Road Demake is a Puzzle Script based game, where you are a chicken, and you have to cross the road.",
        "ProjectLinks": [{
            "description" : projectLink,
            "link" : "https://www.puzzlescript.net/editor.html?hack=cdeae4f6f41977c9fe0220daa7729ce6"
          },
          {
            "description" : gameLink,
            "link" : "https://www.puzzlescript.net/play.html?p=cdeae4f6f41977c9fe0220daa7729ce6"
          }
        ],
        "VideoId": "whrHn8TDcdY"
    },
    {
        "Title": "LEGO® Physical Behaviour Bricks",
        "Description": "The LEGO® Physical Behaviour Bricks Game uses the concept of behaviour brick from the LEGO® Microgames, to let the player to use actual LEGO® bricks to control the game. The game was made during the LEGO® Game Jam 2021, in less than 40h by two developers (in which one was me) and 3 designers. The device used to detect the colors of the bricks is the LEGO® Technic Hub, and LEGO® has provided a library for reading and writing to the hub.",
        "ProjectLinks": [{
            "description" : projectLink,
            "link" : "https://github.com/nayaaltahan/lego-game-jam-physical-behaviour-bricks"
          }
        ],
        "VideoId": "bdCi5chKxhs"
    }
    
]
export function CreateArvrAsCards() {
    var arvrDocument = document.createDocumentFragment();
    for (let i = 0; i < arvr.length; i+=2) {
        var row = document.createElement("DIV")
        row.classList.add("row");
        row.classList.add('card-group')
        let col1 = addProjectAsCard(arvr[i])
        if(arvr[i+1])
        {
            let col2 = addProjectAsCard(arvr[i+1])
            row.append(col2)
        }
        row.append(col1)
        arvrDocument.append(row)
    }
    let arvrDom = document.getElementById("arvr")
    arvrDom.append(arvrDocument)
}

export function CreateMobileApplicationsAsCards() {
    var mobileApplicationsDocument = document.createDocumentFragment();
    for (let i = 0; i < mobileApplications.length; i+=2) {
        var row = document.createElement("DIV")
        row.classList.add("row");
        row.classList.add('card-group')
        let col1 = addProjectAsCard(mobileApplications[i])
        row.append(col1)
        if(mobileApplications[i+1])
        {
            let col2 = addProjectAsCard(mobileApplications[i+1])
            row.append(col2)
        }
        mobileApplicationsDocument.append(row)
    }
    let mobileApplicationsDom = document.getElementById("mobileApplications")
    mobileApplicationsDom.append(mobileApplicationsDocument)
}

export function CreateWebsitesAsCards() {
    var websitesDocument = document.createDocumentFragment();
    for (let i = 0; i < websites.length; i+=2) {
        var row = document.createElement("DIV")
        row.classList.add("row");
        row.classList.add('card-group')
        let col1 = addProjectAsCard(websites[i])
        if(websites[i+1])
        {
            let col2 = addProjectAsCard(websites[i+1])
            row.append(col2)
        }
        row.append(col1)
        websitesDocument.append(row)
    }
    let websitesDom = document.getElementById("websites")
    websitesDom.append(websitesDocument)
}

export function CreateGamesAsCards() {
    var gamesDocument = document.createDocumentFragment();
    for (let i = 0; i < games.length; i+=2) {
        var row = document.createElement("DIV")
        row.classList.add("row");
        row.classList.add('card-group')
        let col1 = addProjectAsCard(games[i],"col-md-12")
        if(games[i+1])
        {
            let col2 = addProjectAsCard(games[i+1])
            row.append(col2)
        }
        row.append(col1)
        gamesDocument.append(row)
    }
    let gamesDom = document.getElementById("games")
    gamesDom.append(gamesDocument)
}


function addVideo(VideoId){
    let iframe = document.createElement("iframe")
    iframe.id = "video"+1;
    iframe.setAttribute("type", "text/html")
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + VideoId + "?rel=0")
    iframe.setAttribute("frameborder", "0")
    iframe.setAttribute("allowfullscreen", "allowfullscreen")
    return iframe;
}

function addProjectAsCard(project, column = "col-md-6"){
  var col = document.createElement("DIV")
    col.classList.add(column);
    col.classList.add("project");
    col.classList.add('card')
    col.classList.add('pt-3')
    var textDiv = document.createElement("DIV")
    textDiv.classList.add("card-body");
    textDiv.classList.add("d-flex");
    textDiv.classList.add("flex-column");
    var h1 = document.createElement("H4")
    h1.innerHTML = project.Title;
    h1.classList.add('card-title')
    var p = document.createElement("P")
    p.innerHTML = project.Description;
    p.classList.add('card-text')
    var br = document.createElement("br")
    textDiv.append(h1);
    textDiv.append(p);
    textDiv.append(br);
    var btnGroup = document.createElement("DIV")
    btnGroup.classList.add("btn-group");
    btnGroup.classList.add('mt-auto')
    btnGroup.setAttribute('role', 'group')
    project.ProjectLinks.forEach(projectLink => {
        var a = document.createElement("A")
        a.innerHTML = projectLink.description;
        a.href = projectLink.link;
        a.classList.add('btn')
        a.classList.add('btn-dark')
        btnGroup.append(a)
    });
    textDiv.append(btnGroup)

    var videoDiv = document.createElement("DIV")
   // videoDiv.classList.add("auto-resizable-iframe");
    videoDiv.classList.add("embed-responsive");
    videoDiv.classList.add("embed-responsive-16by9");
    videoDiv.classList.add("card-img-top");
    let div = document.createElement("DIV")
    videoDiv.append(addVideo(project.VideoId))

    col.append(videoDiv)
    col.append(textDiv)
    return col;
}
