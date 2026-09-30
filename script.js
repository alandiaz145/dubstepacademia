const navShell=document.querySelector('.nav-shell');
const menuToggle=document.querySelector('.menu-toggle');
if(menuToggle){
  menuToggle.addEventListener('click',()=>{
    const open=navShell.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',String(open));
  });
}

const slides=[...document.querySelectorAll('.daw-slide')];
const dots=[...document.querySelectorAll('.dot-btn')];
let current=0;
function showSlide(index){
  current=(index+slides.length)%slides.length;
  slides.forEach((s,i)=>s.classList.toggle('active',i===current));
  dots.forEach((d,i)=>d.classList.toggle('active',i===current));
}
document.querySelectorAll('.slider-btn').forEach(btn=>{
  btn.addEventListener('click',()=>showSlide(current+Number(btn.dataset.dir)));
});
dots.forEach(dot=>dot.addEventListener('click',()=>showSlide(Number(dot.dataset.slideTo))));

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',()=>{
    navShell?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded','false');
  });
});

const form=document.querySelector('.newsletter');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const button=form.querySelector('button');
    const original=button.textContent;
    button.textContent='✓';
    setTimeout(()=>button.textContent=original,1600);
  });
}
