// 给缩略图绑定点击事件，点击后获取 src 替换 Display 的 src
// 绑定所有缩略图
var ablum = function() {
	var images = '.Thumbnail-image'
	bindAll(images, 'click', function(event){
		var target = event.target
		var src = target.src
		log('点击成功', src)
		var picture = e('.picture')
		picture.src = src
	})
}

var __main = function() {
	ablum()
}
__main()
