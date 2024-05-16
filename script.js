
const cursorDot = document.createElement("div");
cursorDot.classList.add("cursor-dot");
document.body.appendChild(cursorDot);

document.addEventListener("mousemove", (event) => {
  cursorDot.style.left = event.clientX + "px";
  cursorDot.style.top = event.clientY + "px";
});

// Animation styles
const animateCursor = () => {
  cursorDot.classList.toggle("active");
  requestAnimationFrame(animateCursor);
};

animateCursor();


