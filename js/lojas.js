<script>
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const dots = Array.from(document.querySelectorAll('.carousel-dots .dot'));

  let indexAtual = 0;
  const total = slides.length;

  function atualizarCarousel() {
    const offset = -indexAtual * 100;
    track.style.transform = 'translateX(' + offset + '%)';

    // atualizar dots
    dots.forEach((dot, i) => {
      if (i === indexAtual) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function proximo() {
    indexAtual = indexAtual + 1;
    if (indexAtual >= total) indexAtual = 0; // loop
    atualizarCarousel();
  }

  function anterior() {
    indexAtual = indexAtual - 1;
    if (indexAtual < 0) indexAtual = total - 1; // loop
    atualizarCarousel();
  }

  // botões
  nextBtn.addEventListener('click', proximo);
  prevBtn.addEventListener('click', anterior);

  // dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      indexAtual = i;
      atualizarCarousel();
    });
  });

  // autoplay
  let autoplayTimer = setInterval(proximo, 4000);

  // pausa no hover
  const wrapper = document.querySelector('.carousel-wrapper');
  wrapper.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
  wrapper.addEventListener('mouseleave', () => {
    autoplayTimer = setInterval(proximo, 4000);
  });

  atualizarCarousel();
});
</script>
