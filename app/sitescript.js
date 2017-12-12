function setPhil (e) {
  e.preventDefault()
  toggleSelected(e.target)
  let webProjects = document.getElementsByClassName("webdev")[0]
  let philProjects = document.getElementsByClassName("philosophy")[0]
  let otherProjects = document.getElementsByClassName("other")[0]
  webProjects.classList.add("hidden")
  philProjects.classList.remove("hidden")
  otherProjects.classList.add("hidden")
}

function toggleSelected (target) {
  let other = document.querySelector(".selected")
  if(other){other.className = ""}
  target.className = "selected"
}

function setWeb (e) {
  e.preventDefault()
  toggleSelected(e.target)
  let webProjects = document.getElementsByClassName("webdev")[0]
  let philProjects = document.getElementsByClassName("philosophy")[0]
  let otherProjects = document.getElementsByClassName("other")[0]
  philProjects.classList.add("hidden")
  webProjects.classList.remove("hidden")
  otherProjects.classList.add("hidden")
}

function setOther (e) {
  e.preventDefault();
  toggleSelected(e.target);
  let webProjects = document.getElementsByClassName("webdev")[0];
  let philProjects = document.getElementsByClassName("philosophy")[0];
  let otherProjects = document.getElementsByClassName("other")[0];
  philProjects.classList.add("hidden")
  webProjects.classList.add("hidden")
  otherProjects.classList.remove("hidden");
}

let footerInHeader = true//window.innerWidth > 800

function moveFooter(e) {
  let body = document.getElementsByTagName("body")[0]
  let footer = document.getElementsByTagName("footer")[0]
  let header = document.getElementsByTagName("header")[0]
  if (e.target.innerWidth <= 800 && footerInHeader) {
    body.appendChild(footer);
    // header.removeChild(footer);
    footerInHeader = false;
  }  else if (e.target.innerWidth > 800 && !footerInHeader) {
    header.appendChild(footer);
    // body.removeChild(footer);
    footerInHeader = true;
  }
}

document.addEventListener("DOMContentLoaded",
  function(){
    let Philbutton = document.getElementById("philbutton")
    let Webbutton= document.getElementById("webbutton")
    let Otherbutton= document.getElementById("otherbutton")
    Webbutton.addEventListener("click", setWeb)
    Philbutton.addEventListener("click", setPhil)
    Otherbutton.addEventListener("click", setOther)
    window.onresize = moveFooter;
    moveFooter({target: window})
  }
)
