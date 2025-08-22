// FAQ Toggle functionaliteit
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector("h3");

    question.addEventListener("click", function () {
      const isActive = item.classList.contains("active");

      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
      });

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});
