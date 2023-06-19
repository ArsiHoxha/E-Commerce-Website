let foter = document.querySelector('.foter');

const KATEGORITE = {
    'Computers and Laptops': 'Include various brands and models of desktop computers, laptops, gaming laptops, and accessories such as keyboards, mice, and monitors.',
    'Mobile Phones and Tablets': 'Offer a wide range of smartphones and tablets from different manufacturers, along with accessories like cases, screen protectors, and chargers.',
    'Audio and Video Equipment': 'Include products like headphones, earphones, speakers, soundbars, home theater systems, televisions, projectors, and media players.',
    'Cameras and Photography': 'Provide a selection of digital cameras, DSLRs, mirrorless cameras, lenses, tripods, camera bags, memory cards, and other photography accessories.',
    'Smart Home Devices': 'Offer smart home automation products such as smart speakers, smart displays, smart thermostats, smart lighting systems, security cameras, and smart locks.',
    'Gaming Consoles and Accessories': 'Include popular gaming consoles like PlayStation, Xbox, and Nintendo Switch, as well as gaming accessories such as controllers, gaming headsets, and gaming chairs.',
    'Networking and Internet Devices': 'Provide routers, modems, Wi-Fi extenders, network switches, and other networking equipment.',
    'Computer Components and Accessories': 'Include items like computer processors (CPUs), graphics cards, RAM modules, hard drives, SSDs, power supplies, and cooling solutions.',
  };



  const categories = Object.keys(KATEGORITE);

  categories.forEach((category, index) => {
    const categoryDiv = document.createElement('div');
    const categoryImage = document.createElement('img');
  
    if (index === 0) {
      categoryImage.src = 'imazhet/laptop.jpg';
      categoryImage.id='laptop'
      categoryImage.addEventListener('click',()=>{
        const link = document.createElement('a');
        link.onclick = "location.href='http://127.0.0.1:5500/SHITJET/faqet/laptoppKompjuter.html';"
        window.location = 'http://127.0.0.1:5500/SHITJET/faqet/laptoppKompjuter.html'
      })
    } else if (index === 1) {
      categoryImage.src = 'imazhet/telefon.jpg';
      categoryImage.id='laptop'
      categoryImage.addEventListener('click',()=>{
        const link = document.createElement('a');
        link.onclick = "location.href='http://127.0.0.1:5500/SHITJET/faqet/laptoppKompjuter.html';"
        window.location = 'http://127.0.0.1:5500/SHITJET/faqet/telehone.html'
      })
    } else if (index === 2) {
      categoryImage.src = 'imazhet/kufjet.jpeg';
      categoryImage.id='laptop'   
      categoryImage.addEventListener('click',()=>{
        const link = document.createElement('a');
        link.onclick = "location.href='http://127.0.0.1:5500/SHITJET/faqet/laptoppKompjuter.html';"
        window.location = 'http://127.0.0.1:5500/SHITJET/faqet/kufje.html'
      }) }
       else if (index === 3) {
        categoryImage.src = 'imazhet/camera.webp';
        categoryImage.id='laptop'    
      }else if (index === 4) {
        categoryImage.src = 'imazhet/smart.webp';
        categoryImage.id='laptop'    
      }else if (index === 5) {
        categoryImage.src = 'imazhet/ps5.webp';
        categoryImage.id='laptop'    
      }else if (index === 6) {
        categoryImage.src = 'imazhet/router.webp';
        categoryImage.id='laptop'    
      }
         else {
          categoryImage.src = 'imazhet/ram.webp';
          categoryImage.id='laptop'        }
  
    categoryDiv.id='pjesaKatrore'
    categoryDiv.appendChild(categoryImage);
    foter.appendChild(categoryDiv);
  })