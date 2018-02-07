$('#submit').on('click', getPOS);

function getPOS() {
	var text = $('#text-field').text();

	$.ajax('/api/pos', {
		data: {
			words: text
		}
	})
		.success(function(data) {
			MusicMaker.play(data)
		})
		.fail(function(err) {
			console.log(err)
		})
}