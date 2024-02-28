const boxes = document.querySelectorAll(".box");
const box = document.getElementsByClassName("box");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

box[0].addEventListener("click", () => {
  console.log("click");
  window.location.href = "https://www.youtube.com/watch?v=y57KNH1Bddo&list=PLo9cOuNK_d7oe9Cr3EKrNzYleIH4aada5";
});
box[1].addEventListener("click", () => {
  console.log("click");
  window.location.href = "https://www.youtube.com/watch?v=Ot8fUQA9qGQ";
});
box[2].addEventListener("click", () => {
  console.log("click");
  window.location.href = "https://www.youtube.com/watch?v=JAGx5FHzMhQ";
});
box[3].addEventListener("click", () => {
  console.log("click");
  window.location.href = "https://www.youtube.com/watch?v=Bv0rWLK7894";
});
box[4].addEventListener("click", () => {
  console.log("click");
  window.location.href = "https://www.youtube.com/watch?v=Lz5zxAiX0wQ";
});
