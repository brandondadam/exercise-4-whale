jQuery(document).ready(function($){
		var num = parseInt(location.hash.substr(1));
		console.log(num);
		$.get('/whale/txt/'+num+'.txt', function(txt)){
			consle.log(txt);
		});
		if (isNaN(num)) {
			num = 0;
		}
});
