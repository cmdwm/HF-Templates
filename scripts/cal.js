// Scripting

function showAboutMe(){
    document.getElementById("about-me").style.display = "block";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

function showPortfolio(){
    document.getElementById("about-me").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
    document.getElementById("contact").style.display = "none";
}

function showContactMe(){
    document.getElementById("about-me").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("contact").style.display = "block";
}
