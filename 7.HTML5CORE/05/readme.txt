【Geolocation】
地理定位的方式：
-- GPS	    ：美国的 卫星
-- 北斗定位 ：纯国产，惯性定位；
-- 基站定位 ：移动运营商的基站（提供信号源）
-- 基于互联网：IP地址；
目前很多浏览器都具有定位功能；

H5中的地理定位技术：
	由Google提供的* Google Map产品；
	中国不能使用Google公司所有服务和产品；
	百度地图 和 高德地图
百度地图：
	地址：http://developer.baidu.com/map/
	注册百度开发者账号；获取秘钥；

	*使用百度地图：
		1.引入百度地图的js，换成自己的秘钥；ak=“”；
		2.在页面中定义用于显示百度地图的容器（元素）；
		3.创建百度地图的map对象；
			构造器：BMap.Map(容器id);
				如：var map=new BMap.Map(容器id);
		4.对地图初始化（必要）：
			对象初始化：centerAndZoom(center,zoom)
				center:
					类型为Point，zoom必须设置；
					类型为String，“北京”，zoom可以忽略；
				zoom：
					Number,设置地图级别
					 移动端：3-18
					 PC端  ：3-19
				如：map.centerAndZoom("北京",11);

	百度地图的组件
		核心类 - Map类
		构造器 - BMap.Map(容器id);
	方法
		centerAndZoom() - 初始化方法
		addControl() - 添加控件
		addOverlay() - 添加标注
		Control类 - 控件类
		ScaleControl类 - 表示地图的比例尺
	构造器 - 创建比例尺对象
		NavigationControl类 - 表示移动缩放控件
	构造器 - 创建移动缩放控件
		Overlay类 - 遮盖物类
		Marker类 - 表示地图的一个标注
	构造器 - Marker(point)
		Point类 - 标注类

【拖放】
源元素	  --> 目标元素
源元素事件 -- 目标元素事件
源元素事件：
	dragstart :开始拖放时被触发；
	drag	  :拖放过程；
	dragend   :结束拖放时被触发；

目标元素事件：
	dragenter :当鼠标拖放第一次进入到目标元素内被触发；
	dragover  :当鼠标拖放进入到目标元素内被触发；
			为该事件增加event.preventDefault();
	drop      :当鼠标拖放在目标元素内投放时；
			默认情况下没被触发：
			原因：HTML页面默认情况下，不允许拖放；
			称为HTML的默认行为；（表单提交）
			解决：阻止页面的默认行为；event.preventDefault();加到dragover内；
	dragleave :当鼠标拖放离开目标元素被触发；

dataTransfer对象；
	作用：
	1.可以将源元素的信息存储在这个对象里；
	2.将存储在该对象的源元素信息，提交给目标元素；
	方法：
	setData()	设置源元素数据；
	getData()	获取源元素数据；
	clearData()	清除源元素数据；

 setDragImage()方法
       * 作用 - 修改拖放过程中,鼠标跟随的图片效果
       * 用法 - drag、dragstart等事件
       * 注意 - 实际操作中,该方法几乎不用
