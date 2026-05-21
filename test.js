const scrollContainer = document.querySelector(".testclass");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault(); // Prevents the page from scrolling vertically
  scrollContainer.scrollLeft += evt.deltaY;
});