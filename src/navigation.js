// navigation.js

export function initializeNavigation() {
    let marker = document.querySelector('#marker');
    let list = document.querySelectorAll('ul li');
  
    function moveIndicator(e) {
      if (marker) {
        marker.style.left = e.target.offsetLeft + 'px';
        marker.style.width = e.target.offsetWidth + 'px';
      }
    }
  
    function activeLink() {
      list.forEach((item) => item.classList.remove('active'));
      this.classList.add('active');
    }
  
    list.forEach((link) => {
      link.addEventListener('mousemove', moveIndicator);
      link.addEventListener('mouseover', activeLink);
    });
  
    // Cleanup function
    return () => {
      list.forEach((link) => {
        link.removeEventListener('mousemove', moveIndicator);
        link.removeEventListener('mouseover', activeLink);
      });
    };
  }
  