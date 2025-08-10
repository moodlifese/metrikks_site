// Loop words in hero subline
const items = document.querySelectorAll('.loop-item');
let i = 0;
function cycle(){
  items.forEach((el, idx)=>{
    el.classList.toggle('is-active', idx === i);
  });
  i = (i + 1) % items.length;
}
setInterval(cycle, 1800);
cycle();

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
