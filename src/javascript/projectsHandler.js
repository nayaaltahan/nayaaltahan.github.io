export let listDOM = document.getElementById("list");
export let arvr = [
    {
        "Title": "AR Brick Breaker Game",
        "Description": "This was my first project done in Unity, which is a marker based augmented reality game, where the player uses the marker to play the game and break the bricks. Vuforia images targets and camera were used in this project",
        "ProjectLinks": ["https://github.com/nayaaltahan/mix1-assignment1"],
        "VideoId": "wFPTo9W-S78"
    },
    {
        "Title": "Guided Virtual Travel in AR",
        "Description": "Since the pandemic was preventing people from travelling, we decided to create an AR application that will offer the user a guided ( audio guide or text of the places' names ) tour of Paris and London. We built the app so it can be easily extended to tour around more cities. The application was built in Unity and it uses Google ARCore",
        "ProjectLinks": ["https://github.com/nayaaltahan/mix1-assignment22"],
        "VideoId": "LbZpk2n9XHo"
    },
    {
        "Title": "Beat Saber Recreation",
        "Description": "This is a quick recreation of the VR game, Beat Saber. It's built in Unity for Oculus Quest using the Oculus Integration Package.",
        "ProjectLinks": ["https://github.com/nayaaltahan/mix1-assignment33"],
        "VideoId": "Zua3fIU46_o"
    },
    {
        "Title": "VR Escape Room",
        "Description": "Escape room targeted for smaller kids, where they solve some mysteries to find the key and win the game. The game contains 4 steps to complete, and it's in VR. It's built in Unity for Oculus Quest using the Oculus Integration Package.",
        "ProjectLinks": ["https://github.com/nayaaltahan/mix1-assignment4"],
        "VideoId": "LMlsVQx5Be0"
    }
];
export let websites = [
    {
        "Title": "Website for Bed and Breakfast",
        "Description": "When I first learned about ASP.NET and how to create a web application using it, I decided to create this little website for a bed and breakfast, I used ASP.NET MVC which makes the architecture of the application very efficient and easy to understand",
        "ProjectLinks": ["https://github.com/nayaaltahan/rytterskolens_bb_website"],
        "VideoId": "PNWBnJ9CqzI"
    },
    {
        "Title": "Flights Tracker Website",
        "Description": "ASP.NET MVC based web application, that uses Chart.JS to display charts of flights related data. The project is hosted on the cloud using AWS",
        "ProjectLinks": ["https://github.com/nayaaltahan/SEP6_backend", "https://github.com/nayaaltahan/SEP6_frontend"],
        "VideoId": "dD1VZekg7y8"
    }
];
export let mobileApplications = [
    {
        "Title": "Dothraki Translator",
        "Description": "I created this application to translate english words and phrases to Dothraki, a Games of Thrones language. The application is programmed in Java and runs on Android phones. THe application translates, saves translation history, and has a share functionality",
        "ProjectLinks": ["https://github.com/nayaaltahan/GOT_Dothraki-English_Translator"],
        "VideoId": "XHHHlnzu6Qk"
    },
    {
        "Title": "Plant Management Application",
        "Description": "An application that tracks plants using a sensors device. the device tracks light, humidity, temperature and CO2 levels to make sure its within the limits that the end-user has specified. The user can view the plant data and the data will show in red in case it's not within the limits. The application keeps the data stored in a database and gets it through an API built in Java. The Data has a data warehouse that can be viewed though PowerBI, I was responsible of the backend and data warehousing parts of the project",
        "ProjectLinks": ["https://github.com/nayaaltahan/DB_SEP4_PMI", "https://github.com/mungiu/SEP4_PMI"],
        "VideoId": "AjJiwaHSCUU"
    }
]

export function CreateArvr() {
    var arvrDocument = document.createDocumentFragment();

    arvr.forEach(project => {
        let row = addProject(project)
        arvrDocument.append(row)
    });
    let arvrDom = document.getElementById("arvr")
    arvrDom.append(arvrDocument)
}

export function CreateMobileApplications() {
    var mobileApplicationsDocument = document.createDocumentFragment();

    mobileApplications.forEach(project => {
        let row = addProject(project)
        mobileApplicationsDocument.append(row)
    });
    let mobileApplicationsDom = document.getElementById("mobileApplications")
    mobileApplicationsDom.append(mobileApplicationsDocument)
}

export function CreateWebsites() {
    var websitesDocument = document.createDocumentFragment();

    websites.forEach(project => {
        let row = addProject(project)
        websitesDocument.append(row)
    });
    let websitesDom = document.getElementById("websites")
    websitesDom.append(websitesDocument)
}


function addVideo(VideoId){
    let iframe = document.createElement("iframe")
    iframe.id = "video"+1;
    iframe.setAttribute("type", "text/html")
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + VideoId + "?rel=0")
    iframe.setAttribute("frameborder", "0")
    return iframe;
}

function addProject(project){
    var row = document.createElement("DIV")
    row.classList.add("row");
    row.classList.add("project");
    var col1 = document.createElement("DIV")
    col1.classList.add("col-xl-6");
    var h1 = document.createElement("H1")
    h1.innerHTML = project.Title;
    var p = document.createElement("P")
    p.innerHTML = project.Description;
   // var a = document.createElement("A").innerHTML = "Project Link";
    //a.href = project.ProjectLinks[0];
    col1.append(h1);
    col1.append(p);
    //col1.appendChild(a);
    row.append(col1)

    var col2 = document.createElement("DIV")
    col2.classList.add("col-xl-6");
    col2.classList.add("auto-resizable-iframe");
    let div = document.createElement("DIV")
    div.append(addVideo(project.VideoId))
    col2.append(div)
    row.append(col2)
    return row;
}

