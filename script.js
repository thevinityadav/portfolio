// Display current year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

// Open email
function openMail() {
  const subject = encodeURIComponent("Portfolio Inquiry - Vinit Yadav");
  const body = encodeURIComponent("Hi Vinit, I checked your portfolio and would love to connect!");
  window.location.href = `mailto:vinityadav0008@gmail.com?subject=${subject}&body=${body}`;
}
