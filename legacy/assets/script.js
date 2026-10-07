(function(){
  var burger=document.getElementById('burger'),menu=document.getElementById('menu');
  if(burger&&menu){
    burger.addEventListener('click',function(){
      var open=menu.classList.toggle('open');
      burger.setAttribute('aria-expanded',open);
    });
  }
  var btn=document.getElementById('copyBtn'),box=document.getElementById('oficio'),note=document.getElementById('copyNote');
  if(btn&&box){
    var select=function(){
      var r=document.createRange();r.selectNodeContents(box);
      var s=window.getSelection();s.removeAllRanges();s.addRange(r);
      note.textContent='Texto selecionado. Use copiar do seu aparelho.';
    };
    btn.addEventListener('click',function(){
      if(navigator.clipboard&&navigator.clipboard.writeText){
        navigator.clipboard.writeText(box.innerText).then(function(){
          btn.textContent='Copiado';
          note.textContent='Ofício copiado. Cole no e-mail ou no Word e preencha os campos.';
          setTimeout(function(){btn.textContent='Copiar ofício'},2200);
        }).catch(select);
      }else select();
    });
  }
})();
