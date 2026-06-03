const scrollContainer = document.querySelector(".testclass");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault(true); // Prevents the page from scrolling vertically
  scrollContainer.scrollLeft += evt.deltaY;
});

const scrollLimit = 500; // Change this to your specific pixel target

window.addEventListener('scroll', function() {
  if (window.scrollY >= scrollLimit) {
    window.scrollTo(0, scrollLimit); // Locks position exactly at the limit
  }
});