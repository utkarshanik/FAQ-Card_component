

document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll(".q1 img");
  const que = document.querySelectorAll(".questioncard");
  const paras = document.querySelectorAll('.a1');

  paras[0].classList.add('active');
  imgs[0].src = 'assets/images/icon-minus.svg';
  
  que.forEach((q1) => {
    const img = q1.querySelector("img");
    const para = q1.querySelector(".a1");
    
    img.addEventListener('click', () => {
      console.log("Clicked");
      
      // Close all open answers and reset icons
      paras.forEach((p) => p.classList.remove('active'));
      imgs.forEach((i) => (i.src = 'assets/images/icon-plus.svg'));
      
      // Toggle the current answer
      if (!para.classList.contains('active')) {
        para.classList.add('active');
        img.src = 'assets/images/icon-minus.svg';
      }
    });
    
    let index=0;

    function keynavigate(ind)
    {
      paras.forEach((p) => p.classList.remove('active'));
      imgs.forEach((i) => (i.src = 'assets/images/icon-plus.svg'));
      paras[ind].classList.add('active')
      imgs[ind].src = 'assets/images/icon-minus.svg';
    }
    document.addEventListener('keydown',(e)=>{
      if(e.key==='ArrowDown')
        {
          index= (index + 1) % paras.length;
          keynavigate(index);
        }
        
        if(e.key==='ArrowUp')
          {
            index=(index - 1 + paras.length) % paras.length;
            keynavigate(index);
            imgs[index].src = 'assets/images/icon-minus.svg';
        }

  })  


  });

});
