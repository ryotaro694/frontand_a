$('button').click(function() {
  $.get('https://catfact.ninja/fact')
  .done((data, textStatus, jqXHR) => {
    $('.sentence').text(data.fact);
  })
	.fail((jqXHR, textStatus, errorThrown) => {
		alert('エラーが発生しました！')
	});
})