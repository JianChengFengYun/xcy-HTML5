【HTML5视频播放】
Flash:  Adobe
	视频，音频，动画，网页游戏等；
	特点：浏览器原生不支持，要安装组件；性能不好；
	移动端不支持flash；--HTML5

1.视频处理：
	1.<video src="一种格式" autoplay></video>标签 不影响HTML页面，耗显卡和cpo
	如果当前浏览器不支持video元素，可以在video元素内编写提示信息；<video>浏览器不支持</video> *****
	<video>支持的视频格式
		MP4格式 - 目前比较主流
		OGG格式 - 多用于移动端
		WebM格式 - 目前唯一支持超高清格式
			* 在HTML页面中支持超高清格式(HTML5)
			* 由Google公司推出的
	属性：
	- src		引入路径 
		支持的视频格式：
			.mp4(主流)
			.ogv(OGG格式的一种，用于移动端)
			.webm(在HTML5页面中，目前唯一支持超高清格式 1080p，由Google退出)
	- autoplay	自动播放
			只定义属性名，没有属性值
	- controls      视频播放的控制面板
			只定义属性名，没有属性值
	- loop		视频循环播放
			只定义属性名，没有属性值
	- poster="img"	播放之前先引入一张图片
	- width,height
	- preload	预加载
		auto	自动加载，尽快加载完毕，默认
		none	不加载（不能被缓存，版权保护）
		metadata只加载视频基本信息（视频名称，宽高等，不包含视频）

	2.在video元素中 可以包含多个<source>元素,可以放不同格式的相同视频，兼容各个浏览器；
	<video autoplay>
		浏览器不支持
		<source src="mp4格式" />
		<source src="ogv格式" />
		<source src="webm格式" />
	</video>

	高级内容：
	方法：
	- play()	视频播放
	- pause()	视频暂停
	- load()	视频加载
	- canPlayType() 判断浏览器是否支持指定视频格式；
	事件：
	- play		视频播放时触发
	- pause		视频暂停时触发
	- ended		视频结束时触发 第一集播完指向第二集 改变src
	- error		视频播放“错误”时触发
	- canplay	不考虑整体情况下，只要能播放就播放
	- canplaythrough考虑整体
	- progress	视频加载的进度
	属性：表示判断的 返回布尔值 true/false
	- paused	判断当前是否暂停 
	- ended		判断当前是否播放完毕
	- duration	表示当前视频的时长
	- currentTime	表示当前视频播放的位置

	例子:自定义控制面板


	问题：video元素与其他元素是相对定位时，当video视频全屏时，浏览器默认在最前端，广告被覆盖；
	      不能全屏；
	解决：利用video元素提供的高级编程自己实现；
	      使用目前封装好的video的js库；

2.音频处理：
	<audio>元素
	audio支持的音频格式：
		MP3格式 - 目前比较主流
		OGG格式
		WAV格式
	1.<audio src></audio>
	2.
	<audio controls>
		浏览器不支持
		<source src="mp3格式" />
		<source src="格式" />
		<source src="格式" />
	</audio>
	用法同video

3.画布Canvas：HTML5提供的新元素；
	Canvas在HTML页面中提供画布的功能；
	在画布中绘制各种图形：
	Canvas绘制的图形与html页面无关，无法通过DOM获取绘制的图形，无法为绘制的图形绑定DOM事件；只能使用Canvas提供的API；********
	Canvas用途：
		在HTML中绘制图表（如柱状图，饼状图）
		网页游戏--
	Canvas 默认300px*150px；

	如何使用：
	1.在页面定义Canvas元素；
		Canvas元素：使用行内样式定义Canvas元素的宽高，会对绘制出的图形的尺寸有影响，
			    建议使用属性width="500"，或css文件；*************
	2.在js中：
		  获取Canvas元素；
		  创建画布对象；
			getContext("2d")方法；返回画布对象；
					参数-表示创建的2d效果还是3d效果；
					参数类型是string类型；-->"2d" "3d"
			通过该对象使用Canvas提供的API方法；
		  绘制图形；
	绘制图形：
	1.绘制矩形：
		- fillRect(x,y,width,height)	实心矩形 默认颜色是黑色；
			x,y:矩形左上角坐标值；
		- strokeRect(x,y,width,height)	空心矩形	默认边框宽度为1px；
		- clearRect(x,y,width,height)	清除指定区域的矩形
		设置颜色：
		- fillStyle	设置填充颜色
		- strokeStyle	描边颜色
		- globalAlpha	透明度（0-1）
		颜色渐变：
		- 线型渐变	createLinearGradient(x1,y1,x2,y2)
			具有基准线；起点(x1,y1)和终点(x2,y2)；
			**返回渐变对象；通过这个对象设置渐变颜色；
			addColorStop(position,color);
				position:渐变的位置；0-1之间；
				color:颜色；

		- 射线渐变	createRadialGradient(x1,y1,r1,x2,y2,r2)
			具有柱形（锥形）-两个圆的面积
			x1,y1：第一个圆的圆心坐标；
			r1：第一个圆的半径
			x2,y2：第二个圆的圆心坐标；
			r2：第二个圆的半径
			**返回渐变对象；