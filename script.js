const galleries = {
  casamento: ['assets/album-casamento-01.jpg', 'assets/album-casamento-02.jpg', 'assets/album-casamento-03.jpg', 'assets/album-casamento-04.jpg', 'assets/album-casamento-05.jpg', 'assets/album-casamento-06.jpg', 'assets/album-casamento-07.jpg', 'assets/album-casamento-08.jpg', 'assets/album-casamento-09.jpg', 'assets/album-casamento-10.jpg', 'assets/album-casamento-11.jpg', 'assets/album-casamento-12.jpg', 'assets/album-casamento-13.jpg', 'assets/album-casamento-14.jpg', 'assets/album-casamento-15.jpg', 'assets/album-casamento-16.jpg', 'assets/album-casamento-17.jpg', 'assets/album-casamento-18.jpg', 'assets/album-casamento-19.jpg', 'assets/album-casamento-20.jpg', 'assets/album-casamento-21.jpg', 'assets/album-casamento-22.jpg', 'assets/album-casamento-23.jpg', 'assets/album-casamento-24.jpg', 'assets/album-casamento-25.jpg', 'assets/album-casamento-26.jpg', 'assets/album-casamento-27.jpg', 'assets/album-casamento-28.jpg', 'assets/album-casamento-29.jpg'],
  aniversario: ['assets/album-aniversario-01.jpg', 'assets/album-aniversario-02.jpg', 'assets/album-aniversario-03.jpg', 'assets/album-aniversario-04.jpg', 'assets/album-aniversario-05.jpg', 'assets/album-aniversario-06.jpg', 'assets/album-aniversario-07.jpg', 'assets/album-aniversario-08.jpg', 'assets/album-aniversario-09.jpg'],
  brinquedos: ['assets/album-brinquedos-01.jpg', 'assets/album-brinquedos-02.jpg', 'assets/album-brinquedos-03.jpg', 'assets/album-brinquedos-04.jpg']
};
const titles = {casamento:'Casamento', aniversario:'Aniversário', brinquedos:'Brinquedos'};
let current = 'casamento'; let index = 0;
const img = document.getElementById('mainGalleryImage');
const title = document.getElementById('galleryTitle');
const thumbs = document.getElementById('thumbs');
function render(){
  const list = galleries[current];
  title.textContent = titles[current];
  if(!list.length){ img.src=''; img.alt='Fotos em breve'; thumbs.innerHTML='<p style="width:100%;text-align:center;color:#8a6a60">As fotos deste álbum serão adicionadas em seguida.</p>'; return; }
  img.src = list[index];
  thumbs.innerHTML = list.map((src,i)=>`<img class="${i===index?'active':''}" src="${src}" alt="Miniatura ${i+1}" onclick="index=${i};render()">`).join('');
}
function next(){ const list=galleries[current]; if(!list.length)return; index=(index+1)%list.length; render(); }
function prev(){ const list=galleries[current]; if(!list.length)return; index=(index-1+list.length)%list.length; render(); }
document.querySelectorAll('.service-card').forEach(btn=>btn.addEventListener('click',()=>{current=btn.dataset.gallery; index=0; render(); document.getElementById('galeria').scrollIntoView({behavior:'smooth'});}));
document.getElementById('nextPhoto').onclick=next; document.getElementById('prevPhoto').onclick=prev; img.onclick=next;
render();


const heroVideo = document.getElementById('heroVideo');
const soundToggle = document.getElementById('soundToggle');
if (heroVideo && soundToggle) {
  soundToggle.addEventListener('click', async () => {
    heroVideo.muted = !heroVideo.muted;
    heroVideo.volume = heroVideo.muted ? 0 : 1;
    soundToggle.textContent = heroVideo.muted ? '🔈 Ativar som' : '🔇 Desativar som';
    soundToggle.setAttribute('aria-label', heroVideo.muted ? 'Ativar som do vídeo' : 'Desativar som do vídeo');
    try {
      await heroVideo.play();
    } catch (e) {
      // Em alguns celulares, o play precisa vir direto do clique do usuário.
    }
  });
}
