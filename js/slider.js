let currentIndex = 0;
  setSlides(currentIndex);
  function nextSlides() {
    setSlides(currentIndex += 1);
  }
  function prevSlides() {
    setSlides(currentIndex -= 1);
  }
  function currentSlide(n) {
    setSlides(currentIndex = n);
  }
function setSlides(n) {
    let i;
    let slides = document.querySelectorAll(".project");
    let dots = document.querySelectorAll(".point");
    let link = document.querySelectorAll(".menu");
    if (n >= slides.length) {
      currentIndex = 0
    }
    if (n < 0) {
      currentIndex = slides.length - 1
    }
    for (i=0; i < slides.length; i++){
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active")
    }
    for (i = 0; i < link.length; i++) {
      link[i].classList.remove("link_active")
    }
    slides[currentIndex].style.display = "flex";
    dots[currentIndex].classList.add("active");
    link[currentIndex].classList.add("link_active");
  }

  const salons = [
    {
      text: 'Sochi thieves',
      img: src="./images/sochi_mini.jpg"
    },
    {
      text: 'Patriotic',
      img: src="./images/patriotic_mini.jpg"
    },
    {
      text: 'Admiral',
      img: src="./images/fumespace_mini.jpg"
    } 
  ]
  
  const text = document.querySelector('.text')
  const img = document.querySelector('.comode-image')
 
  const setSalon = (index) => {
    text.innerText = salons[index].text
    img.style.backgroundImage = `url(${salons[index].img})`
  }

  const prev = document.getElementById('moin')
  const next = document.getElementById('plus')
  
  prev.addEventListener('click', () => {
    if (currentIndex === 0) {
      currentIndex = 2;
    } else {
      currentIndex -= 1;
    }
    setSalon(currentIndex);
  })
 
  next.addEventListener('click', () => {
    if (currentIndex === 2) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    setSalon(currentIndex);
  })





 



 






    