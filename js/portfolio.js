var Shuffle = window.Shuffle;
var element = document.querySelector('.project-grid');
var sizer = element.querySelector('.sizer');

var shuffleInstance = new Shuffle(element, {
    itemSelector: '.portfolio-item',
    sizer: sizer
});