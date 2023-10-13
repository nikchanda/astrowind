<script>
  export let root;
  
  const rootElm = document.querySelector(`#${root}`);
  const btns = rootElm.querySelectorAll('button');
  const dets = rootElm.querySelectorAll('.detail');

  const clearSelections = () => {
    btns.forEach((btn)=>{
      btn.className = btn.className.replace(' selected','');
    });
    dets.forEach((det)=>{
      det.className = det.className.replace(' selected','');
    })
  }

  const selectDetail = (evt) => {
    const btnElm = evt.target;
    const ident = btnElm.getAttribute('data-wc-key');
    const tgtElm = rootElm.querySelector(`.wcd-${ident}`);

    if (!tgtElm) {
      return;
    } 

    clearSelections();
    btnElm.className = `${btnElm.className} selected`;
    tgtElm.className = `${tgtElm.className} selected`;  
  }

  btns.forEach((btn)=>{
    btn.removeEventListener('mouseup',(evt) => { selectDetail(evt) });
    btn.addEventListener('mouseup',(evt) => { selectDetail(evt) });
  });
</script>