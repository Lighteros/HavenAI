// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const sectionTitle = document.querySelector(".challenge-section-title");
  const challengeCards = document.querySelectorAll(".challenge-card");

  // Observe the section title for animation
  const titleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionTitle.style.opacity = "1";
          sectionTitle.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.5 }
  );

  titleObserver.observe(sectionTitle);

  // Observe each challenge card for animation
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index;
          entry.target.style.opacity = "1";
          entry.target.style.transform = "scale(1)";
          entry.target.style.transitionDelay = `${index * 0.2}s`;
        }
      });
    },
    { threshold: 0.5 }
  );

  challengeCards.forEach((card) => cardObserver.observe(card));
});
document
  .getElementById("toggle-button")
  .addEventListener("change", function () {
    const challengesGrid = document.querySelector(".challenges-grid");
    const solutionsGrid = document.querySelector(".solutions");
    const isShowingSolutions = solutionsGrid.style.display === "grid";

    if (isShowingSolutions) {
      // Show challenges and hide solutions
      solutionsGrid.style.animation = "fadeOutDown 0.5s forwards";
      setTimeout(() => {
        solutionsGrid.style.display = "none";
        challengesGrid.style.display = "grid";
        challengesGrid.style.animation = "fadeInUp 0.5s forwards";
      }, 500);
      this.textContent = "Show Solutions";
    } else {
      // Show solutions and hide challenges
      challengesGrid.style.animation = "fadeOutDown 0.5s forwards";
      setTimeout(() => {
        challengesGrid.style.display = "none";
        solutionsGrid.style.display = "grid";
        solutionsGrid.style.animation = "fadeInUp 0.5s forwards";
      }, 500);
      this.textContent = "Show Challenges";
    }
  });

const businessBtn = document.getElementById("businessBtn");
const endUserBtn = document.getElementById("endUserBtn");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
let activeSection = "business";

const updateSlides = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active", "hidden");
    if (slide.classList.contains(activeSection)) {
      const sectionSlides = document.querySelectorAll(
        `.slide.${activeSection}`
      );
      sectionSlides.forEach((s, idx) => {
        if (idx === currentIndex) {
          s.classList.add("active");
        } else if (idx < currentIndex) {
          s.classList.add("hidden");
        }
      });
    }
  });
};

businessBtn.addEventListener("click", () => {
  activeSection = "business";
  currentIndex = 0;
  businessBtn.classList.add("active");
  endUserBtn.classList.remove("active");
  updateSlides();
});

endUserBtn.addEventListener("click", () => {
  activeSection = "end-user";
  currentIndex = 0;
  endUserBtn.classList.add("active");
  businessBtn.classList.remove("active");
  updateSlides();
});

prevBtn.addEventListener("click", () => {
  const sectionSlides = document.querySelectorAll(`.slide.${activeSection}`);
  currentIndex =
    (currentIndex - 1 + sectionSlides.length) % sectionSlides.length;
  updateSlides();
});

nextBtn.addEventListener("click", () => {
  const sectionSlides = document.querySelectorAll(`.slide.${activeSection}`);
  currentIndex = (currentIndex + 1) % sectionSlides.length;
  updateSlides();
});

updateSlides();
const buttons = document.querySelectorAll(".section-2-buttons button");
const sections = document.querySelectorAll(".section-2-content");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons and sections
    buttons.forEach((btn) => btn.classList.remove("active"));
    sections.forEach((section) => section.classList.remove("active"));

    // Add 'active' class to the clicked button and corresponding section
    button.classList.add("active");
    const sectionId = button.id.replace("Btn", "Content");
    document.getElementById(sectionId).classList.add("active");
  });
});
const ctx = document.getElementById("tokenomicsChart").getContext("2d");

const data = {
  labels: ["Liquidity: 80%", "Marketing: 10%", "Team: 10%"],
  datasets: [
    {
      data: [80, 10, 10],
      backgroundColor: ["#c9fa4933", "#7e9e2b", "#ffa500"],
      borderWidth: 2,
      borderColor: "#c9fa49",
      hoverOffset: 15,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: 20,
  },
  animation: {
    animateScale: true,
    animateRotate: true,
  },
  cutout: "70%", // Makes the donut chart
};

const tokenomicsChart = new Chart(ctx, {
  type: "doughnut",
  data: data,
  options: options,
});

// Create legend manually
const legendContainer = document.getElementById("legend");
data.labels.forEach((label, index) => {
  const color = data.datasets[0].backgroundColor[index];
  const item = document.createElement("li");
  const colorBox = document.createElement("span");
  colorBox.style.backgroundColor = color;
  item.appendChild(colorBox);
  item.appendChild(document.createTextNode(label));
  legendContainer.appendChild(item);
});

document.getElementById("play-button").addEventListener("click", function () {
  var video = document.getElementById("mobileVideo");
  var mainImage = document.getElementById("mainImage");

  if (video.paused) {
    video.play();
    mainImage.src = "images/pause-svgrepo-com.svg"; // Replace with the path to the new image
  } else {
    video.pause();
    mainImage.src = "images/6287aa06d7aa5b1af89760ab_Vector%20896.svg"; // Replace with the path to the paused image
  }
});

document.getElementById("mobileVideo").addEventListener("ended", function () {
  var mainImage = document.getElementById("mainImage");

  // Change the image back to the original state
  mainImage.src = "images/6287aa06d7aa5b1af89760ab_Vector%20896.svg"; // Replace with the path to the initial image
});
