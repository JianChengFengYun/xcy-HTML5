
1. 转换的原点
	默认在中心点；
	修改原点：transform-origin:
	  值：
	  1.x坐标 y坐标
	    当前物体左上角为x:0px y:0px;
	  2.宽度百分比 高度百分比
	    0%  0%  左上点
	    50% 50% 中心点
	  3.关键字：
	    top
	    bottom
	    left
	    right
	    center 中间 默认
	    left top 左上点
	  4.如果只给一个值，x坐标和y坐标相同；
		    两     x坐标 y坐标
		    三     x坐标 y坐标 z坐标

2.转换 2d
	形状 尺寸 位置
	transform:

	旋转：rotate()
	位移：translate()
	缩放：scale()
	倾斜：skew()

	- 旋转：围绕参照原点，旋转指定角度，默认顺时针；
	  语法：transform:rotate(ndeg);
			       n为正 顺时针旋转
			       n为负 逆时针旋转
*************   rotate 不但能够旋转元素，同时能够旋转绘图的坐标系方向；如果配合其他的变形一起做的话，会影响之后延坐标值得其他变形。
			解决方案：将rotate()放在最后；用空格区分；

	- 位移：延坐标方向 移动指定距离
	  语法：translate(x轴移动距离,y轴移动距离);
		x: 右为正 左为负
		y：下为正 上为负
************    translate 不会影响其他元素为止，但可能会盖住其他位置；
	  其他两个单方向移：
	    translateX(距离)
	    translateY(距离)

	- 缩放：将坐标轴上的坐标指定缩放的倍数；
	  语法：scale(倍数)
		倍数：0-1之间的小数是缩小，>1放大；
		     等比缩放；
	  其他两个单方向缩放：
	    scaleX()
	    scaleY()

	    transform:scale(2); 扩大2倍；

	- 倾斜：沿着坐标轴上的方向，倾斜指定角度；
	  语法：skew(ndeg);仅沿着X轴倾斜
	        skew(ndeg,ndeg);沿着X轴 Y轴倾斜
	  其他两个单方向倾斜：
	    skewX()
	    skewY()
************  X轴:角度为正 向左倒
		  角度为负 向右倒
************  Y轴:角度为正 向上倒
		  角度为负 向下倒

3.转换 3d
	坐标轴：x坐标 y坐标 z坐标
	属性：
	    perspective
	    设定假定的人眼位置到投影平面的距离；
	    如何使用：
		设置在父元素上；
	    浏览器兼容：
	        chrom,safari:-webkit-perspective
	        firefox:-moz-perspective

	- 位移：3D位移，可以改变元素在Z轴上的位置；
	  translateZ(z)
	  translate3d(x,y,z)

	- 旋转：rotate()
	  rotateX(ndeg);
	  rotateY(ndeg);
	  rotateZ(ndeg);

	- 缩放：scale()
	  scaleZ(z)
	  scale3d(x,y,z)



1.过渡
	transition
	过渡四要素：
	  - 过渡属性
		background,color,transform,width,height,opacity,
	  - 过渡需要时间
	  - 过渡函数：速度 方式
	  - 过渡延迟时间：激发操作后执行间隔（s/ms）

	1.过渡属性
	  transition-property:background,color;
	2.过渡时间
	  transition-duration:5s 10ms;
	3.过渡函数
	  transition-timing-function:
	  备选值：
		ease；		慢-快-慢；
		linear；		匀速
		ease-in；	慢-快 (加速)
		ease-out；	快-慢 （减速）
		ease-in-out;	慢-加速-减速-慢
	4.过渡延迟
	  transition-delay:5s/ms;

	5.整合transition属性:
	  transsition:属性名 持续时间 过渡函数 过渡延迟,属性名 持续时间 过渡函数 过渡延迟;

2.关键帧动画 
	关键帧：动画执行过程中，物体在某一位置上的特殊状态；
	关键帧动画：使用连续的关键帧，控制物体联系的状态变化；
	
	用处：
	  1.连续有规律 -- 过渡 transition
	  2.无规律的连续变化 -- 动画 animation

	实现：
	  1.定义关键帧：
	    @keyframes 动画名{
		from/0%{
			动画开始状态
			css样式
		}

		percent(关键点){
			css样式
		}
		to/100%{
			动画结束状态
			css样式

		}
	    }
	    实例：
	    @keyframes change{
		0%{
			background:red;
		}
		10%{
			background:orange;
		}
		50%{
			background:yellow;
		}
		80%{
			background:green;
		}
		100%{
			background:blue;
		}
	    }
	    浏览器兼容：
	    @keyframes ： IE FF;
	    @-webkit-keyframes : chrome safari;
	    @-o-keyframes : opera;

	  2.触发动画
	    animation
	    animation:动画名 持续时间 速度类型 延迟；

	    使用：
		1.写在非伪类的选择器里，页面加载就执行动画；
		2.写在伪类中，伪类触发则执行动画；
		
	    浏览器兼容：
	    animation ： IE FF;
	    -webkit-animation : chrome safari;
	    -o-animation : opera;

	  3.动画子属性：
	    - animation-name:@keyframes(动画)名称;
	    - animation-duration:动画时长;
	    - animation-timing-function:动画速度
	    - animation-dalay:动画延迟时间
	    - animation-iteration-count:播放次数
	      值：
	         数值
		 infinite 无限次；
	    - animation-direction:动画播放方向；
	      值：
	        normal    正常播放
		alternate 轮流播放
		  - 奇数次数 正向播放；
		  - 偶数次数 反向播放；
		  
	    animation:动画名 持续时间 速度类型 延迟 播放次数 动画播放方向；
	    - animation-fill-mode: 播放前后效果；
	      值：
	         none 不改变默认行为；
		 forwards：动画完成后保证最后一个属性状态；
		 backwards:动画播放前，显示开始属性；
		 both
	    - animation-play-state: 控制动画播放与暂停
	      值：
	         paused 暂停
		 running 播放
	      使用场合：
	         - 配合伪类
		 - 结合js使用；

3.css优化；
	1. 减少HTTP请求个数；
	  - 合并背景图到一个图像；
	2. 页面顶部引入css；
	3. 将css与js放到外部文件（引入外部文件，客户端会缓存）；
	4.css代码优化
	  - 合并样式；
	  - 缩写样式文件；
	  - 减少样式重写
	  - 代码压缩(工具)
	  - 不要再html中缩放图像(改变图像大小)；影响图像传输；
	  - 避免空的src和href；

