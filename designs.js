// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$(document).ready(function(){
	$('#sizePicker').submit(function makeGrid(grid) {

// Your code goes here!

		var sizeRow = $('#inputHeight').val();
		var sizeColumn = $('#inputWeight').val();

		for (var i = 0; i < sizeRow; i++){
			$('table').append('<tr></tr>');
			for(var j = 0; j < sizeColumn; j++) {
				$('tr:last').append('<td></td>');
				$('td').attr("class",'cells');
			}
		}
		grid.preventDefault();

		$('.cells').click(function(event){
			var paint = $('#colorPicker').val();
			$(event.target).css('background-color', paint);
		});
	});
});
