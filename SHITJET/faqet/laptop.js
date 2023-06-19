async function  MERRTEDHENAT(){
  const kerko = await fetch('http://127.0.0.1:5500/SHITJET/faqet/dokumenti.csv')
  const merr = await kerko.text()
  const rreshte =  merr.split('\n')
  rreshte.forEach(element => {
    const imazhi =  element.split(',')[0]
    const imgSrc = document.createElement('img')
    imgSrc.src = imazhi
    imgSrc.id = 'imgSrc'
    //***imazhi mbaroi 

    const cmimi =  element.split(',')[1]
    const cimimiText = document.createElement('h2')
    cimimiText.innerHTML = 'EUR ' + cmimi
    cimimiText.id = 'cmimiText';

    //***cmimi mbaroi 

    const pershkrimi =  element.split(',')[2];
    const pershkrimiText = document.createElement('h2')
    pershkrimiText.innerHTML = pershkrimi;
    pershkrimiText.id = 'pershkrimiText';

    //***pershkrimi mbaroi 


    const tegjitha = document.createElement('div')
    tegjitha.appendChild(imgSrc)  
    tegjitha.appendChild(cimimiText)  
    tegjitha.appendChild(pershkrimiText)  
    tegjitha.id = 'tegjitha'

    tegjitha.addEventListener('click', () =>{
      alert(pershkrimiText.innerHTML)
      const whatsup = document.createElement('a')
      whatsup.href='https://wa.me/0696697667'
      

    })

    
  document.body.appendChild(tegjitha)
  
  
  
  
  });



  




}
MERRTEDHENAT()