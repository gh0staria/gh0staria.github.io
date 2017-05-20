/*function showAll() {
	$(".grid-item").css("display", "block");
}

function showCategory(cat) {
	$(".grid-item").hide();
	$("." + cat).css("display", "block");
	salvattore.rescanMediaQueries();
}*/

var $grid = $('.grid').masonry({
	// options
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	percentPosition: true,
	gutter: 10
});

$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});