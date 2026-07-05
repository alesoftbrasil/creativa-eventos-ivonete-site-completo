const galleries = {
  casamento: ['assets/album-casamento-01.jpg'],
  aniversario: ['assets/album-aniversario-01.jpg'],
  brinquedos: ['assets/album-brinquedos-01.jpg']
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
