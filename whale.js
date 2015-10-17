jQuery(document).ready(function($) {
	update();
	window.addEventListener('hashchange', update, false)
} );

function update() { //Updates the text
	var num = parseInt(location.hash.substr(1));

	if (isNaN(num))
	{
		num = 0;
	}

	$.get('/whale/txt/'+num+'.txt', function(txt) {
		$('a').html(txt);
		$('a').attr('href', '#'+(num+1));
	});
}
