
1.框模型
	- 盒子模型 Box Model 
	  定义元素框处理元素内容、内边距、边框、外边距的方式；
	  对象的实际宽度=左外边距+左边框+左内边距+width+右内边距+右边框+右外边距；

	1.外边距
	  - 会在元素外创建额外的空白，透明；
	  - 值可以是：数值px、百分比%、自动auto、负值；
	  margin: 
		值可以是：
		-- 1个 上下左右；	margin:5px;
		-- 2个 上下 左右；	margin:5px 10px;
		-- 3个 上 左右 下；	margin:5px auto 15px;		上下不同，左右自动，水平居中；
		-- 4个 上 右 下 左；	margin:5px 10px 15px 20px;

	  margin-left/top/right/bottom:

	  - 实现水平方向显示居中
	    margin:0px auto;

********  谷歌调试
	
********  当垂直方向两个外边距相遇的，边框之间的上下外边距会合并，以值大的为准；
		
	2.内边距(内填充)
	  - 内容区域与边框之间的空间；
	  注意：会扩大元素边框所占用的区域；
	  -赋值：
	   padding:数值px、百分比%; 
*********  没有负值
	  padding: 
		值可以是：
		-- 1个 上下左右；	padding:5px;
		-- 2个 上下 左右；	padding:5px 10px;
		-- 3个 上 左右 下；	padding:5px 10px 15px;		
		-- 4个 上 右 下 左；	padding:5px 10px 15px 20px;

	  padding-left/top/right/bottom:

	3.css重写：
		去除标签默认显示效果；将margin和padding都设置为0；

	********  默认情况下，以下元素都存在外边距：
		  - body
		  - h1~h6
		  - p
		  *{margin:0px;padding:0px;}
		  list-style-type:none;或list-style:none;


2.背景
	1.背景颜色:
		background-color:transparent;透明；
	2.背景图片：
		background-image:none;
				 url("img.jpg");
	3.背景重复：
		background-repeat:
				  repeat
				  repeat-x
				  repeat-y
				  no-repeat
	4.背景图像尺寸：
		background-size:v1 v2; 
				v1% v2%; 宽度 / 高度;
				cover    扩展背景图像，使背景图完全覆盖背景区域；
				contain  将图像扩展到最大尺寸；让宽度和高度自适应内容区域；

	5.背景图片固定：
		background-attachment:
				scroll  默认 滚动
				fixed   固定
	6.背景定位：
		background-position:

				left
				right
				top
				bottom
				center
				x% y%;水平偏移 垂直偏移；
				x y;  水平偏移 垂直偏移；可以是负值；**********************
	7.背景绘制区域：
		在容器的哪部分绘制背景；(颜色)
		background-clip:
				border-box; 背景被裁剪到边框；	包含边框
				padding-box;背景被裁剪到内边距框；不包含边框
				content-box;背景被裁剪到边框；	 不包含padding；
	8.背景定位区域：
		在容器的哪部分绘制背景；(图像)
		background-origin:
				border-box; 背景被裁剪到边框；	包含边框 
				padding-box;背景被裁剪到内边距框；不包含边框
				content-box;背景被裁剪到边框；	 不包含padding；
	9.背景属性：
		在一个属性中声明所有的背景属性；
		background:color url repeat attachment position;

3.背景渐变：
	线性渐变
	径向渐变
	重复渐变
	background-image:
			linear-gradient;		线性渐变
			radial-gradient;		径向渐变
			repeating-linear-gradient;	重复线性渐变
			repeating-radial-gradient;	重复径向渐变

	1.linear-gradient(起始位置,开始颜色值 位置,过渡颜色 位置,...,结束颜色 位置);

			 (to bottom,red 0%,green 50%,blue 80%,orange 100%);

			   0deg		to bottom 从下向上；
			  45deg		
			  90deg		to left
			  180deg        to top
			  360deg	to right
			  瞬时方向

			  位置可以使用数值和百分比；

	2.radial-gradient(半径 at 圆心,开始颜色值 位置,过渡颜色 位置,...,结束颜色 位置);

			 (size at top left,red 0%,green 50%,blue 80%,orange 100%);
			  数值	  top
				  left
				  bottom
				  right
				  数值

			  位置可以使用数值和百分比；

	3.repeating-linear-gradient(起始位置,开始颜色值 位置,过渡颜色 位置,...,结束颜色 位置);

				   (to bottom,red,green 10px,blue 50px,orange 100px);

					   0deg		to bottom 从下向上；
					  45deg		
					  90deg		to left
					  180deg        to top
					  360deg	to right
					  瞬时方向

					  位置使用数值

	4.repeating-radial-gradient(半径 at 圆心,开始颜色值 位置,过渡颜色 位置,...,结束颜色 位置);
				 (size at top left,red 0%,green 50%,blue 80%,orange 100%);
				  数值	  top
					  left
					  bottom
					  right
					  数值

				  位置可以使用数值和百分比；

4.浏览器兼容：
	- 火狐Firefox		需要前缀 -moz-
	- Chrome Safari		需要前缀 -webkit-
	- Opera			需要前缀 -o-

