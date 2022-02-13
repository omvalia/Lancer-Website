document.querySelector(".read-more-btn").addEventListener("click", (event) => {
  event.target.parentNode.children[0].style.display = "none";
  event.target.parentNode.children[1].style.display = "block";
});
