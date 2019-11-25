/* eslint-disable */
const createEleWithClass = (tag, className) => {
  const ele = document.createElement(tag);
  ele.className = className;
  return ele;
};

class Slides {
  constructor(data) {
    this.data = data;
    this.container = createEleWithClass("div", "slides");
    this.currentIdx = 0;
    var totalPages = data.length.toString();
    if(data.length < 10){
      totalPages = '0'+totalPages;
    }
    [...document.querySelectorAll('.pagination .total_page')][0].innerHTML = totalPages;
    this.slides = this.data.map((entry, index) => {

      var slide  = '';
      var slide = createEleWithClass("div", "slide");
      const title = createEleWithClass("h1", "slide-title");
      const meta = createEleWithClass("p", "slide-meta");
      var more = '';
      if(entry.link){
        var more = createEleWithClass("a", "slide-more");
        more.href = entry.link;
      }else{
        var more = createEleWithClass("button", "slide-more");
      }
      
      slide.classList.add(index !== 0 ? "next" : "show-meta"); 
      meta.innerHTML = entry.meta;
      title.innerHTML = entry.title;
      title.dataset.title = entry.title;
      more.innerHTML = 'View work';
      slide.appendChild(meta);
      slide.appendChild(title);
      slide.appendChild(more);
      this.container.appendChild(slide);
      
      if(entry.titleColor === 'white'){
        slide.classList.add('white-meta');
      }
      if(entry.logoColor === 'black'){
        slide.classList.add('black-v');
        [...document.querySelectorAll('.logo__black')][0].classList.remove('show__logo');
        [...document.querySelectorAll('.logo__white')][0].classList.add('show__logo');
      }
      if(entry.animation === 'none'){
        slide.classList.add('no-animation');
      }
      if(entry.theme === 'dark'){
        slide.classList.add('dark-themed');
        // [...document.querySelectorAll('.cursor')][0].classList.add('white-cursor');
      }
      if(entry.iconShadow){
        slide.classList.add('icon-shadow');
        [...document.querySelectorAll('.floating-shadow')][0].style.opacity = 1;
        
      }
      
      if(index === 0){
        slide.children[0].setAttribute("data-aos", "fade-up");   
        slide.children[0].setAttribute("data-aos-delay", "400"); 
        slide.children[1].setAttribute("data-aos", "fade-up");   
        slide.children[1].setAttribute("data-aos-delay", "500"); 
        slide.children[2].setAttribute("data-aos", "fade-up");   
        slide.children[2].setAttribute("data-aos-delay", "600"); 
      }


      if(entry.video){
        var att = document.createAttribute("data-video");       // Create a "class" attribute
        att.value = entry.video;
        slide.children[2].classList.add('has-video');
        slide.children[2].setAttributeNode(att);
      }

      return slide;
    });
  }
  mount(container) {
    container.appendChild(this.container);
  }
  onActiveIndexChange(activeIndex) {
    if(window.location.href.includes('work') || window.location.href.includes('team') || window.location.href.includes('contact') ){
    }else{
      if([...document.querySelectorAll('.openedDesktop')].length === 0){
        [...document.querySelectorAll('.floating-shadow')][0].classList.remove('show-shadow');
        var currentPage = activeIndex + 1;
        currentPage = currentPage.toString();
        if(activeIndex < 10){
          currentPage = '0'+currentPage;
        }
        [...document.querySelectorAll('.pagination .current_page')][0].innerHTML = currentPage;
        document.querySelectorAll
        this.currentIdx = activeIndex;
        for (let i = 0; i < this.slides.length; i++) {
          if (activeIndex === i) {
            if(this.slides[i].classList.contains('dark-themed')){
              //[...document.querySelectorAll('.menu__icon i')][0].classList.add('shadow');
              // [...document.querySelectorAll('.cursor')][0].classList.add('white-cursor');
            }

            if(this.slides[i].classList.contains('black-v')){
              // var raxoLetters = [...document.querySelectorAll('.frame .cls-1')]
              // for (let index = 0; index < raxoLetters.length; index++) {
              //   const element = raxoLetters[index];
              //   element.classList.add("black-v");
              // }
              [...document.querySelectorAll('.menu__icon')][0].classList.add('black-icon');
              [...document.querySelectorAll('#pageContent .pagination')][0].classList.add("black-v");
              [...document.querySelectorAll('#pageContent .pagination')][0].classList.remove("black-v");
              [...document.querySelectorAll('.logo__black')][0].classList.add('show__logo');
              [...document.querySelectorAll('.logo__white')][0].classList.remove('show__logo');
              [...document.querySelectorAll('.pagination')][0].classList.add('dark__navigation');
              
              // [...document.querySelectorAll('.frame .cls-2')][0].classList.add("black-v");
              // [...document.querySelectorAll('.frame__tip')][0].classList.add("black-v");
              // [...document.querySelectorAll('.help-down')][0].classList.add("black-v");
              // [...document.querySelectorAll('.help-mouse-wheel')][0].classList.add("black-v"); 
              // [...document.querySelectorAll('.help-mouse-down')][0].classList.add("black-v"); 
              
            }else{
              // var raxoLetters = [...document.querySelectorAll('.frame .cls-1')]
              // for (let index = 0; index < raxoLetters.length; index++) {
              //   const element = raxoLetters[index];
              //   element.classList.remove("black-v");
              // }
              [...document.querySelectorAll('.menu__icon')][0].classList.remove('black-icon');
              [...document.querySelectorAll('#pageContent .pagination')][0].classList.remove("black-v");
              [...document.querySelectorAll('.pagination')][0].classList.remove('dark__navigation');
              [...document.querySelectorAll('.logo__black')][0].classList.remove('show__logo');
              [...document.querySelectorAll('.logo__white')][0].classList.add('show__logo');
              // [...document.querySelectorAll('.frame .cls-2')][0].classList.remove("black-v");
              // [...document.querySelectorAll('.frame__tip')][0].classList.remove("black-v");
              // [...document.querySelectorAll('.help-down')][0].classList.remove("black-v");
              // [...document.querySelectorAll('.help-mouse-wheel')][0].classList.remove("black-v"); 
              // [...document.querySelectorAll('.help-mouse-down')][0].classList.remove("black-v"); 

            }
            this.slides[i].classList.remove("next");
            this.slides[i].classList.remove("prev");
          } else {
            if (activeIndex > i) {
              this.slides[i].classList.remove("next");
              this.slides[i].classList.add("prev");
            } else {
              this.slides[i].classList.add("next");
              this.slides[i].classList.remove("prev");
            }
          }
        }
      }
    }
  }
  onMove(indexFloat) {
    
    if(window.location.href.includes('work') || window.location.href.includes('team') || window.location.href.includes('contact') ){
    }else{
      if([...document.querySelectorAll('.openedDesktop')].length === 0){
        
        this.container.style.transform = `translateY(${(indexFloat * 100) /
          this.slides.length}%)`;
      }
    }
  }
  
  appear() {
    if(window.location.href.includes('work') || window.location.href.includes('team') || window.location.href.includes('contact') ){
    }else{
      if([...document.querySelectorAll('.openedDesktop')].length === 0){
        this.container.classList.add("scrolling");
        [...document.querySelectorAll('.floating-shadow')][0].style.opacity = 0;
        var theFrame = [...document.querySelectorAll('.frame')];
        var theHeader = [...document.querySelectorAll('#pageHeader')];
        var pagination = [...document.querySelectorAll('#pageContent .pagination')];
        var cursor = [...document.querySelectorAll('.cursor')];
        var pageContent = [...document.querySelectorAll('.imaginary__frame')];
        var cursor = [...document.querySelectorAll('.cursor')];
        theFrame[0].classList.add("scrolling");
        pagination[0].classList.add("scrolling");
        theHeader[0].classList.add("scrolling");
        cursor[0].classList.add("scrolling");
        pageContent[0].classList.add("imaginary__scroll");
        this.slides[this.currentIdx].classList.remove("show-meta");
      }
    }
  }
  disperse(activeIndex) {
    if(window.location.href.includes('work') || window.location.href.includes('team') || window.location.href.includes('contact') ){
    }else{
      if([...document.querySelectorAll('.openedDesktop')].length === 0){
        //this.currentIdx = activeIndex;
        this.slides[this.currentIdx].classList.add("show-meta");
        var theFrame = [...document.querySelectorAll('.frame')];
        var theHeader = [...document.querySelectorAll('#pageHeader')];
        var pagination = [...document.querySelectorAll('#pageContent .pagination')];
        var cursor = [...document.querySelectorAll('.cursor')];
        var pageContent = [...document.querySelectorAll('.imaginary__frame')];
        theFrame[0].classList.remove("scrolling");
        theHeader[0].classList.remove("scrolling");
        pagination[0].classList.remove("scrolling");
        cursor[0].classList.remove("scrolling");
        pageContent[0].classList.remove("imaginary__scroll");


        this.container.classList.remove("scrolling");
        for (let index = 0; index < this.data.length; index++) {
          if (index > activeIndex) {
            this.slides[index].classList.add("next");
            this.slides[index].classList.remove("prev");
          } else if (index < activeIndex) {
            this.slides[index].classList.remove("next");
            this.slides[index].classList.add("prev");
          } else {
            this.slides[index].classList.remove("next");
            this.slides[index].classList.remove("prev");
          }
        }
        if(this.slides[this.currentIdx].classList.contains('icon-shadow')){
          [...document.querySelectorAll('.floating-shadow')][0].style.opacity = 1;
        }else{
          [...document.querySelectorAll('.floating-shadow')][0].style.opacity = 0;
        }
      }
    }
  }
}

export { Slides };
