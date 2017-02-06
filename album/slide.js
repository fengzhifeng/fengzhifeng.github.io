// 下一页
var nextButton = function() {
	var nextButton = e('#id-button-next')
	bindEvent(nextButton, 'click', function(event){
		// log('click')
		// 点击 按钮 得到当前图片 id +1后 显示下一张图片
		var slide = e('.slide')
		var numberOfImgs = parseInt(slide.dataset.img)
		// var imageOfIndex = parseInt(slide.dataset.index)
		// 设置下一张图片id
		var imageOfIndex = currentImg('slide-show')
		var nextIndex = (imageOfIndex + 1) % numberOfImgs
		slide.dataset.index = nextIndex
		changeImage(nextIndex)
		// 小圆点
		follow(nextIndex)
	})
}

// 上一页
var lastButton = function() {
	var lastButton = e('#id-button-last')
	bindEvent(lastButton, 'click', function(event){
		// log('click')
		// 点击 按钮 得到当前图片 id +1后 显示下一张图片
		var slide = e('.slide')
		var numberOfImgs = parseInt(slide.dataset.img)
		log('总数', numberOfImgs)
		// 获取当前图片id
		var imageOfIndex = currentImg('slide-show')
		// 设置上一张图片id
		var lastIndex = (imageOfIndex + numberOfImgs - 1) % numberOfImgs
		log('lastIndex', lastIndex)
		slide.dataset.index = lastIndex
		// 切换图片
		changeImage(lastIndex)
		// 小圆点跟随
		follow(lastIndex)
	})
}

// 获取当前图片 id
var currentImg = function(selector){
	var selector = '.' + selector
	var currentImg = e(selector).id
	log('currentImg', currentImg)
	var len = currentImg.length - 1
	var imageOfIndex = parseInt(currentImg.slice(len))
	log('当前', imageOfIndex)
	return imageOfIndex
}

// 切换图片
var changeImage = function(nextIndex) {
	var nextSelector = '#id-img-' + nextIndex
	var className = 'slide-show'
	removeClassAll(className)
	var img = e(nextSelector)
	img.classList.add(className)
}

// 小圆点跟随
var follow = function(lastIndex) {
	var lastIndicator = '#id-indi-' + lastIndex
	removeClassAll('indi-white')
	var indi = e(lastIndicator)
	indi.classList.add('indi-white')
}

// 点击小圆点，同时更换 小圆点class 和 当前的显示图片
var indicators = function() {
	var indicators = e('.indicators')
	bindEvent(indicators, 'click', function(event){
		// 找到 被点击 的小圆点
		var target = event.target.id
		// 得到最后 id （待优化：当 id 为 两位数时仍能读取到 结果）
		var len = target.length - 1
		var nextId = target.slice(len)
		log('nextId', nextId)
		// 移动小圆点
		follow(nextId)
		// 切换图片
		changeImage(nextId)
	})
}

// 自动播放下一张
var next = function() {
	var nextButton = e('.slide')
		// log('click')
		// 点击 按钮 得到当前图片 id +1后 显示下一张图片
		var slide = e('.slide')
		var numberOfImgs = parseInt(slide.dataset.img)
		// var imageOfIndex = parseInt(slide.dataset.index)
		var imageOfIndex = currentImg('slide-show')
		// 得到当前图片 id
		// var imageOfIndex = currentImg('slide-show')
		// 设置下一张图片id
		var nextIndex = (imageOfIndex + 1) % numberOfImgs
		slide.dataset.index = nextIndex
		changeImage(nextIndex)
		// 小圆点
		follow(nextIndex)
}
var setupAutoPlay = function(numbers) {
	setInterval(function(){
		log('执行')
		next()
	}, numbers)
}

// 如果点击上/下一张 停止 5秒后 在播放
// var stop = function() {
// 	var a = nextButton()
// 		if (nextButton() == true) {
// 			setupAutoPlay(1000)
// 			log('1')
// 		}else if (lastButton()) {
// 			setupAutoPlay(1000)
// 		// }else {
// 		// 	setupAutoPlay(5000)
// 		}
// }
// 主函数入口
var __main = function() {
	nextButton()
	lastButton()
	// 小圆点跟随
	indicators()
	// 自动播放下一张
	setupAutoPlay(1500)
	// stop()
}
__main()
