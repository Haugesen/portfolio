var responsiveSlider = function() {

    var slider = document.querySelector('.content-container');
    var sliderWidth = slider.offsetWidth;
    var mainSlider = document.querySelector('.main-content');
    
    var projectSlide = document.querySelectorAll('.project');
    
    var currentSlide = 1;
    
    var slides = mainSlider.querySelectorAll('.project').length;
    
    var prev = document.querySelector('.prev-btn');
    var next = document.querySelector('.next-btn');

    window.addEventListener('resize', function() {
        sliderWidth = slider.offsetWidth;
    });
    
    var prevSlide = function() {
        if(currentSlide > 1) {
            currentSlide = currentSlide - 2;
            mainSlider.style.left = '-' + currentSlide * sliderWidth + 'px';
            currentSlide++;
        }
        
        // show or hide previous slide btn
        if(currentSlide > 1){
            prev.classList.remove('hidden');
        } else{
            prev.classList.add('hidden');
        }
    };

    var nextSlide = function() {  
        if(currentSlide < slides) {
            mainSlider.style.left = '-' + currentSlide * sliderWidth + 'px';
            currentSlide++;
        }
        // show or hide previous slide btn
        if(currentSlide > 1){
            prev.classList.remove('hidden');
        } else{
            prev.classList.add('hidden');
        }
    };
    
    
    // Navigate slides with buttons
    next.addEventListener('mousedown', function() {
        nextSlide();
    });

    prev.addEventListener('mousedown', function() {
        prevSlide();
    });
    
    // Navigate slides with arrow keys
    document.addEventListener('keydown', function onKeyDown(e) {

        var keyCode = e.keyCode;

        if (keyCode === 37) {
            prevSlide();
        }else if (keyCode === 39) {
            nextSlide();
        }
    });
};

window.onload = function() {
  responsiveSlider();  
}

// window.onresize = function(){ location.reload(); }



