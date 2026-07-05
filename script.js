
const modal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.modal-close');

document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    modalImage.src = img.src;
    modal.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});
