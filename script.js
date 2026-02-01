let svg = document.getElementById("drawingArea");
let isDrawing = false;
let currentLine = null;
svg.addEventListener("mousedown", function (e) {
  isDrawing = true;

  currentLine = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polyline"
  );

  currentLine.setAttribute("stroke", "black");
  currentLine.setAttribute("stroke-width", "2");
  currentLine.setAttribute("fill", "none");

  let startPoint = `${e.offsetX},${e.offsetY}`;
  currentLine.setAttribute("points", startPoint);

  svg.appendChild(currentLine);
});
svg.addEventListener("mousemove", function (e) {
  if (!isDrawing) return;

  let points = currentLine.getAttribute("points");
  points += ` ${e.offsetX},${e.offsetY}`;
  currentLine.setAttribute("points", points);
});
svg.addEventListener("mouseup", function () {
  isDrawing = false;
  currentLine = null;
});
svg.addEventListener("mouseleave", function () {
  isDrawing = false;
});
function clearDrawing() {
  svg.innerHTML = "";
}
