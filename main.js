const item = document.querySelector(".item"),
  placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

function dragstart() {
  item.classList.add("hold");
  setTimeout(() => {
    item.classList.add("hide");
  }, 0);
}

function dragend() {
  item.classList.remove("hold");
  setTimeout(() => {
    item.classList.remove("hide");
  }, 0);
}

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("drop", dragdrop);

  function dragover(e) {
    e.preventDefault();
  }

  function dragleave(e) {
    e.target.classList.remove("hovered");
  }

  function dragenter(e) {
    e.target.classList.add("hovered");
  }

  function dragdrop(e) {
    e.target.classList.remove("hovered");
    e.target.append(item);
  }
}
