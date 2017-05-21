var $grid = $('.grid').masonry({
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	percentPosition: true,
	gutter: 10,
	stagger: 5
});

$grid.imagesLoaded().progress(function () {
	$grid.masonry('layout');
});

$(".filters-btn").click(function (e) {
	// filtering code from http://www.epicwebs.co.uk/jquery-tutorials/quick-and-easy-jquery-masonry-tutorial/
	
	$("button").removeClass("active");
	$(this).toggleClass("active");
	
	var group = $(this).attr("data-filter");
	var groupClass = "." + group;
	
	if(group != "") {
		$(".grid-item").hide();
		$(groupClass).show();
		$('.grid').masonry('layout');
	} else {
		$(".grid-item").show();
		$('.grid').masonry('layout');
	}
});
