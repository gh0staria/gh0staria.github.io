function showAll() {
	$(".grid-item").css("display", "block");
}

function showCategory(cat) {
	$(".grid-item").hide();
	$("." + cat).css("display", "block");
	salvattore.rescanMediaQueries();
}