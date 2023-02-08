const animatedDiv = document.querySelector('.clickMe');

function stopAnimation() {
    animatedDiv.style.animation = "stopAnimation 1s linear forwards";
    animatedDiv.style.animationPlayState = "running";
    animatedDiv.removeEventListener('click', stopAnimation);

    console.log("click")
  };
  animatedDiv.style.animationPlayState = "paused";
  animatedDiv.addEventListener('click', stopAnimation);



  