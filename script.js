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
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
  });
    // Selecteer de knop en de extra tekst via hun id
    const readMoreBtn = document.getElementById('read-more-btn');
    const moreText = document.getElementById('more-text');

    // Voeg een 'click' event listener toe aan de knop
    readMoreBtn.addEventListener('click', function(event) {
      // Voorkom dat de link naar de bovenkant van de pagina springt
      event.preventDefault(); 
      
      // Voeg de 'show' class toe aan de tekstcontainer om deze zichtbaar te maken
      moreText.classList.add('show');
      
      // Verberg de "Lees meer" knop
      readMoreBtn.style.display = 'none';
    });

});
