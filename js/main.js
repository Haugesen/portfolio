console.log('hello');

var aboutBtn = document.querySelector('.about-me-btn');
var aboutModal = document.querySelector('.about-me-modal');

aboutBtn.addEventListener('mousedown', openAbout);

function openAbout(event){
    aboutModal.classList.add('active');  
};


var closeAboutBtn = document.querySelector('#close-about-btn');
closeAboutBtn.addEventListener('mousedown', closeAbout);
function closeAbout(event){
    aboutModal.classList.remove('active');
};