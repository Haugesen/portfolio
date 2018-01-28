// Grid & carousel view button

var viewBtn = document.querySelector('.grid-carousel-view-btn');
var squares = document.querySelectorAll('.square'), i;
  
viewBtn.addEventListener('mousedown', function(event) {
    
    viewBtn.classList.toggle('active');
    
    for (i = 0; i < squares.length; ++i) {
        squares[i].classList.toggle('active');
    }
    
    toggleStylesheet();
    
});


function toggleStylesheet() {
    var stylesheet = document.getElementById('style-slide');
    if (stylesheet.href.match('css/slide.css')) {
        
        stylesheet.href = 'css/grid.css';    
    }
    
    else {
        stylesheet.href = 'css/slide.css';  
    }
};
