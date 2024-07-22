window.onload = function () {
  let timer = null;
  let frameIndex = 0;
  let animationFrames = [];
  let delay = 250;

  const textArea = document.getElementById("text-area");
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const animationSelect = document.getElementById("animation");
  const fontSizeSelect = document.getElementById("fontsize");
  const turboCheckbox = document.getElementById("turbo");

  startButton.onclick = function () {
    startButton.disabled = true;
    stopButton.disabled = false;
    animationSelect.disabled = true;
    frameIndex = 0;
    animationFrames = textArea.value.split("=====\n");
    timer = setInterval(playAnimation, delay);
  };

  stopButton.onclick = function () {
    startButton.disabled = false;
    stopButton.disabled = true;
    animationSelect.disabled = false;
    clearInterval(timer);
    timer = null;
    textArea.value = animationFrames.join("=====\n");
  };

  animationSelect.onchange = function () {
    textArea.value = ANIMATIONS[animationSelect.value];
  };

  fontSizeSelect.onchange = function () {
    textArea.style.fontSize = fontSizeSelect.value;
  };

  turboCheckbox.onchange = function () {
    delay = turboCheckbox.checked ? 50 : 250;
    if (timer) {
      clearInterval(timer);
      timer = setInterval(playAnimation, delay);
    }
  };

  function playAnimation() {
    textArea.value = animationFrames[frameIndex];
    frameIndex = (frameIndex + 1) % animationFrames.length;
  }
};
