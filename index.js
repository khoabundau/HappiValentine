document.addEventListener("DOMContentLoaded", () => {
  const toClick = document.querySelector(".toClick");

  const poemPairs = [
    [".poem1", ".poem2"],
    [".poem3", ".poem4"],
    [".poem5", ".poem6"],
    [".poem7", ".poem8"],
    [".poem9", ".poem10"],
    [".poem11", ".poem12"],
    [".poem13", ".poem14"],
  ];

  let clickCount = 0;

  toClick.addEventListener("click", () => {
    if (clickCount < poemPairs.length) {
      const currentPair = poemPairs[clickCount];

      if (clickCount > 0) {
        const previousPair = poemPairs[clickCount - 1];

        previousPair.forEach((selector) => {
          document.querySelector(selector).classList.add("fade-out");
        });

        setTimeout(() => {
          previousPair.forEach((selector) => {
            document.querySelector(selector).style.visibility = "hidden";
          });

          currentPair.forEach((selector) => {
            const element = document.querySelector(selector);
            element.style.visibility = "visible";
            element.classList.add("fade-in");
          });
        }, 800);
      } else {
        // First click: fade out poem1 & poem2
        currentPair.forEach((selector) => {
          document.querySelector(selector).classList.add("fade-out");
        });

        setTimeout(() => {
          currentPair.forEach((selector) => {
            document.querySelector(selector).style.visibility = "hidden";
          });

          poemPairs[1].forEach((selector) => {
            const element = document.querySelector(selector);
            element.style.visibility = "visible";
            element.classList.add("fade-in");
          });
        }, 800);
      }

      clickCount++;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".desktop"); // The parent div
  const leaf2 = document.querySelector(".leafLie2");

  leaf2.addEventListener("click", () => {
    container.classList.toggle("swap"); // Toggle swap class
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toClick = document.querySelector(".toClick");

  toClick.addEventListener("click", () => {
    toClick.classList.add("rotate");

    // Remove class after animation ends, so it can be clicked again
    setTimeout(() => {
      toClick.classList.remove("rotate");
    }, 1000); // Matches the animation duration
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const chuaText = document.querySelector(".chuaText");
  const blurBatDau = document.querySelector(".blurBatDau");
  const upper = document.querySelector(".upper");
  const under = document.querySelector(".under");

  // Create audio element
  const audio = new Audio(
    "assets/Laufey - Valentine (Official Audio) - Laufey.mp3"
  );
  audio.loop = true; // Enable looping

  chuaText.addEventListener("click", () => {
    // Hide chuaText and blurBatDau
    chuaText.classList.add("hidden");
    blurBatDau.classList.add("hidden");

    // Move upper and under
    upper.classList.add("move-upper");
    under.classList.add("move-under");

    // Play the audio
    audio.play();
  });
});
