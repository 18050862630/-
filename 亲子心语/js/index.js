//头像上传
function preview1(file) {
	var img = new Image();
	var url = img.src = URL.createObjectURL(file);
	var $img = $(img);//将img转化为JQ对象
	img.onload = function() {
		URL.revokeObjectURL(url)
		$('.pos').empty().append($img)
	}
}
function preview2(file) {
	var reader = new FileReader()
	reader.onload = function(e) {
		var $img = $('<img>').attr('src', e.target.result)
		$('.pos').empty().append($img)
	}
	reader.readAsDataURL(file)
}
$(function() {
	$('[type=file]').change(function(e) {
		var file = e.target.files[0]
		preview1(file)
	})
})
//对话框弹窗
$('.entry span').on('click', function() {
	if($('.entry input').val() != '') {
		$('.content').append('<p><span>' + $('.entry input').val() +'</span></p>');
		$('.entry input').val('') 
	}
})