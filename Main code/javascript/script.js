document.addEventListener("DOMContentLoaded", function () {
  var newX,
    currentX = 0,
    pageWidth = window.innerWidth,
    ball = document.querySelector(".body"),
    inner = document.querySelector(".inner"),
    head = document.querySelector(".head"),
    eye = document.querySelector(".eye"),
    antenna = document.querySelector(".antenna"),
    mountains = document.querySelector(".mountains"),
    sun = document.querySelector(".sun"),
    speed = 4,
    distance,
    acceleration,
    antennaPos,
    idleInterval,
    started = false;

  function handleMouseMove(x) {
    if (!started) {
      clearInterval(idleInterval);
      started = true;
    }
    newX = x.pageX;
  }

  function handleTouchMove(e) {
    if ("ontouchstart" in document.documentElement) {
      e = e.touches[0] || e.changedTouches[0];
    }
    if (!started) {
      clearInterval(idleInterval);
      started = true;
    }
    newX = e.pageX;
  }

  document.addEventListener("mousemove", handleMouseMove);

  document.addEventListener("touchmove", handleTouchMove);

  var idleCount = 1;

  function idle() {
    newX = pageWidth / 2;

    idleInterval = setInterval(function () {
      idleCount += speed;
      newX = pageWidth / 2 + Math.cos(idleCount / 100) * 100;
    }, 10);
  }

  function movement() {
    if (currentX !== newX) {
      distance = newX - currentX;
      acceleration = distance / 100;
      antennaPos = 2250 + Math.round(distance / 5) * 75;

      if (antennaPos <= 0) {
        antennaPos = 75;
      } else if (antennaPos >= 4500) {
        antennaPos = 4500;
      }

      currentX += speed * acceleration;

      mountains.style.backgroundPosition =
        "300px " + -currentX / 50 + "px 0";
      sun.style.transform = "translateX(" + -currentX / 100 + "px)";
      inner.style.transform = "rotateZ(" + currentX / 2 + "deg)";
      head.style.transform =
        "translateY(-95px) rotateZ(" + distance / 15 + "deg)";
      ball.style.transform = "translateX(" + currentX + "px)";
      eye.style.transform = "translateX(" + distance / 15 + "px)";
      antenna.style.backgroundPosition = antennaPos + "px 0";
    } else {
      return;
    }
  }

  setInterval(movement, 10);
  idle();
});


// $(document).ready(function () {
//   var newX,
//     currentX = 0,
//     pageWidth = $(this).width(),
//     ball = $(".body"),
//     inner = $(".inner"),
//     head = $(".head"),
//     eye = $(".eye"),
//     antenna = $(".antenna"),
//     mountains = $(".mountains"),
//     sun = $(".sun"),
//     speed = 4,
//     distance,
//     acceleration,
//     antennaPos,
//     idleInterval,
//     started = false;

//   $(this).on("mousemove", function (x) {
//     if (!started) {
//       clearInterval(idleInterval);
//       started = true;
//     }
//     newX = x.pageX;
//   });

//   $(document).on("touchmove", function (e) {
//     if ("ontouchstart" in document.documentElement) {
//       e = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
//     }
//     if (!started) {
//       clearInterval(idleInterval);
//       started = true;
//     }
//     newX = e.pageX;
//   });
//   var idleCount = 1;

//   function idle() {
//     newX = pageWidth / 2;

//     idleInterval = setInterval(function () {
//       idleCount += speed;
//       newX = pageWidth / 2 + Math.cos(idleCount / 100) * 100;
//     }, 10);
//   }

//   function movement() {
//     if (currentX !== newX) {
//       distance = newX - currentX;
//       acceleration = distance / 100;
//       antennaPos = 2250 + Math.round(distance / 5) * 75;

//       if (antennaPos <= 0) {
//         antennaPos = 75;
//       } else if (antennaPos >= 4500) {
//         antennaPos = 4500;
//       }

//       currentX += speed * acceleration;

//       mountains.css("background-position", 300 + -currentX / 50 + "px 0");
//       sun.css("transform", "translateX(" + -currentX / 100 + "px)");
//       inner.css("transform", "rotateZ(" + currentX / 2 + "deg)");
//       head.css(
//         "transform",
//         "translateY(-95px) rotateZ(" + distance / 15 + "deg)"
//       );
//       ball.css("transform", "translateX(" + currentX + "px)");
//       eye.css("transform", "translateX(" + distance / 15 + "px)");
//       antenna.css("background-position", antennaPos + "px 0");
//     } else {
//       return;
//     }
//   }

//   setInterval(movement, 10);
//   idle();
// });

