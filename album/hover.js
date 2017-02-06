// 给所有 图片 绑定 mouseover 属性
var mouseOut = function() {
	var selector = '.eating-image'
	// log('images', images)
	bindAll(selector, 'mouseover', function(event){
		// 当鼠标在 图片上方时， 取消 .eating 属性
		var image = event.target
		// removeClassAll('show')
		log('image', image)
		toggleClass(image, 'eating-show')
	})
	bindAll(selector, 'mouseout', function(event){
		// 当鼠标在 图片上方时， 取消 .eating 属性
		var image = event.target
		log('image', image)
		toggleClass(image, 'eating-show')
	})
}

var __main = function() {
	mouseOut()
}
__main()
