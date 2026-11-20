(function(){
  var btns=document.querySelectorAll('.btn'),posts=document.querySelectorAll('article');
  btns.forEach(function(b){b.addEventListener('click',function(){
    btns.forEach(function(x){x.setAttribute('aria-pressed','false')});
    b.setAttribute('aria-pressed','true');
    var f=b.getAttribute('data-f');
    posts.forEach(function(p){p.hidden=!(f==='todas'||p.getAttribute('data-c')===f)});
  })});
  var t=document.getElementById('theme'),root=document.documentElement;
  t.addEventListener('click',function(){
    var dark=getComputedStyle(root).colorScheme==='dark';
    root.setAttribute('data-theme',dark?'light':'dark');
    t.textContent=dark?'Modo oscuro':'Modo claro';
  });
})();
