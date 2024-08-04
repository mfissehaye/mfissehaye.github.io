document.getElementById("startButton").addEventListener("click", function () {
  const width = parseInt(document.getElementById("width").value) || 50;
  const growthAmount =
    parseInt(document.getElementById("growthAmount").value) || 10;
  const growRate = parseInt(document.getElementById("growRate").value) || 250;
  const numberCircles =
    parseInt(document.getElementById("numberCircles").value) || 1;

  for (let i = 0; i < numberCircles; i++) {
    createCircle(width, growthAmount, growRate);
  }
});

function createCircle(width, growthAmount, growRate) {
  const circle = document.createElement("div");
  circle.className = "circle";
  circle.style.width = `${width}px`;
  circle.style.height = `${width}px`;
  circle.style.top = `${Math.random() * (window.innerHeight - width)}px`;
  circle.style.left = `${Math.random() * (window.innerWidth - width)}px`;

  document.body.appendChild(circle);

  let growInterval = setInterval(function () {
    width += growthAmount;
    circle.style.width = `${width}px`;
    circle.style.height = `${width}px`;
  }, growRate);

  circle.addEventListener("click", function () {
    clearInterval(growInterval);
    document.body.removeChild(circle);
  });
}
