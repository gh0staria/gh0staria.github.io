var $grid = $('.grid').masonry({
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	percentPosition: true,
	gutter: 10
});

var items = $grid.masonry('getItemElements');

$grid.imagesLoaded().progress(function () {
	$grid.masonry('layout');
});

function filterGrid(fil) {
	$grid.masonry('reloadItems');
	$grid.masonry('layout');
	
	var	revealItems = [],
		hideItems = [];

	$.each(items, function (i) {
		var item = items[i],
			shouldShow = item.dataset.filter === fil || fil === "";

		if (shouldShow) {
			item.isIgnored = false;
			item.isHidden = false;
			revealItems.push(item);
		} else {
			item.isIgnored = true;
			item.isHidden = true;
			hideItems.push(item);
		}
	});
	
	$grid.masonry('remove', hideItems);
	$grid.append(revealItems);
	$grid.masonry('appended', revealItems).masonry('layout');
}

$(".filters-btn").click(function (e) {
	var filter = $(this).attr("data-filter");
	
	filterGrid(filter);
});
