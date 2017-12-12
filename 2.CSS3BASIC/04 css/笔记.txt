

1.display:规定元素显示方式；
	none;		不占空间隐藏
	block;		显示->行内元素像块级元素显示；
	inline;		让块级元素像内联元素一样显示在一排；
	inline-block;	行内块元素->本身是行内元素，但允许改变width和height；

2.visibility:规定元素是否可见；
	visible;	可见;
	hidden;		占空间隐藏;
	collapse;	表格里，可删除行列；位置还在；

3.opacity:不透明度；
	value;0~1；可以是小数；透明~不透明；


4.vertical-align:
	- td里修改文本的对齐方式；
	- 行内块元素(有width height的行内元素)：img->img边上的文本的相对于img对齐方式；
		baseline；基线；
		top
		middle
		bottom

5.光标：
	cursor：
		default;
		pointer;  IE:hand;
		crosshair;
		text;
		wait;
		help;
	


6.列表样式：
	- 导航；
	list-style-type:
			none;
			disc;
			circle;
			square;

	list-style-image:
			url("");

	li的标识默认在文本之外；
	list-style-position:
			outside;  li外ul内；
			inside;   标识显示在文本之内；li内

	list-style：type url position;

6.定位：
	position:
		static; 默认(静态)；
		relative;
			相对定位：相对于原来的位置偏移；
		absolute;
			绝对定位：- 相对于最近定位的祖先元素；
				  - 如果没有定位的祖先元素；相对于body；
		fixed;
			固定定位：- 相对于可视区；不受滚动条影响；

	top:
	left:
	bottom:
	right:
	z-index:数值；正负值都行；堆叠顺序；


