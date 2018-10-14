document.addEventListener("DOMContentLoaded", initialize);

var Shuffle = window.Shuffle;
var element = document.querySelector('.project-grid');
var sizer = element.querySelector('.sizer');

var shuffleInstance = new Shuffle(element, {
    itemSelector: '.portfolio-item',
    sizer: sizer
});

function initialize() {
    document.getElementById("codefilter").onclick = filterGrid;
    document.getElementById("designfilter").onclick = filterGrid;
}

function filterGrid(event)
{
    var filterby = event.target.innerText; // get text of button
    console.log(filterby);

    shuffleInstance.filter(filterby);
}