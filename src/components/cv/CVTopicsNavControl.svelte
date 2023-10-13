<script>
  export let root;
  const rootElm = document.querySelector(`#${root}`);
  const btns = rootElm.querySelectorAll('button');

  const enableTopic = (btn, key) => {
    btn.className = `${btn.className} selected`;
    rootElm.className = rootElm.className.replace('topic-summary','');
    rootElm.className = `${rootElm.className} topic-${key}`;
  }

  const disableTopic = (btn, key) => {
    btn.className = btn.className.replace(` selected`,'');
    rootElm.className = rootElm.className.replace(` topic-${key}`,'');
    if (rootElm.className.trim().length == 0) {
      rootElm.className = 'topic-summary';
    }
  } 

  const selectTopic = (evt) => {
    const btnElm = evt.target;
    const key = btnElm.getAttribute('data-topic-key');

    if (btnElm.className.indexOf(`selected`) == -1) {
      enableTopic(btnElm, key);
    }
    else {
      disableTopic(btnElm, key);
    }  
  }

  btns.forEach((btn)=>{
    btn.removeEventListener('mouseup',(evt) => { selectTopic(evt) });
    btn.addEventListener('mouseup',(evt) => { selectTopic(evt) });
  });
  
</script>

<style is:global>
  #experience-wrapper li {display:none}
  #experience-wrapper.topic-summary li.topic-summary {display:list-item}
</style>