document.addEventListener("DOMContentLoaded", initialize);

var Shuffle = window.Shuffle;
var element = document.querySelector('.project-grid');
var sizer = element.querySelector('.sizer');

var shuffleInstance = new Shuffle(element, {
    itemSelector: '.portfolio-item',
    sizer: sizer
});

function initialize() {
    document.getElementById("allfilter").onclick = filterGrid;
    document.getElementById("codefilter").onclick = filterGrid;
    document.getElementById("designfilter").onclick = filterGrid;

    // setup "all" to be highlighted
    document.getElementById("allfilter").classList.add("btn-selected");
}

function filterGrid(event)
{
    var filterby = event.target.innerText; // get text of button

    if (filterby != "all")
        shuffleInstance.filter(filterby);
    else
        shuffleInstance.filter(Shuffle.ALL_ITEMS);

    // unselect everything
    document.getElementById("allfilter").classList.remove("btn-selected");
    document.getElementById("codefilter").classList.remove("btn-selected");
    document.getElementById("designfilter").classList.remove("btn-selected");

    // select the right one
    document.getElementById(event.target.id).classList.add("btn-selected");
}