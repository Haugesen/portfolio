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


var tipModal = document.querySelector('.navigate-modal');
var closeTip = document.querySelector('.close-tip');

closeTip.addEventListener('mousedown', closeTipModal);

function closeTipModal(event){
    
    if(window.innerWidth)
    tipModal.classList.add('hidden');
}