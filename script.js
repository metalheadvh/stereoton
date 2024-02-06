const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}


const youtubeIcon = document.querySelector(".icons .fa");
youtubeIcon.addEventListener("mouseenter", () => {
  youtubeIcon.style.color = "#c4302b";
})

const albumArt = document.getElementsByClassName("images");


for (let album of albumArt) {
  album.addEventListener("mouseenter", () => {
    album.style.border = "2px solid black";})
  album.addEventListener("mouseleave", () => {
    album.style.border = "none";})}