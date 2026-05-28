const scrollContainer = document.querySelector(".testclass");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault(true); // Prevents the page from scrolling vertically
  scrollContainer.scrollLeft += evt.deltaY;
});