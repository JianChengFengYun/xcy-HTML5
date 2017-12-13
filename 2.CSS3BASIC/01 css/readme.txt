
1.css : Cascading Style sheet
	层叠样式表
	级联样式表
	1、作用：
		已统一的方式为页面定义外观；
		实现内容与表现的分离；
		提高了代码的可重用性和可维护性；

	2.样式表的分类：
	  - 内联样式表：css代码写在HTML标签的style属性中；
			->只对一个标签起作用；不通用；

			<h2 style="样式规则"></h2>
			样式规则：
				属性名称:属性值;

	  - 内部样式表：css代码写在HTML的head标签里的style标签中；
			->当前网页任何一个标签都可以使用，提高了代码的重用性，仅限当前页面使用；

			<head>
				<title></title>
				<style>
					/*
					这里是注释！
					*/
				</style>
			</head>

			样式组成：选择器和样式声明；
				选择器：决定哪些元素使用定义好的规则；
				样式声明：由一对大括号包围所有的样式规则；
					  选择器{
					         /*样式规则*/
						 属性名称:属性值;
						}

	  - 外部样式表：将样式定义在外部的css文件中，独立于任何一个页面的样式表；可以由任何一个页面进行样式表的引用；
			->将页面内容与表现样式完全分离；真正意义上实现了样式表的可重用性；
			step1:创建以.css为后缀的文件；
			step2:
				  选择器{
					 /*样式规则*/
					 属性名称:属性值;
					}
			step3:在页面对css文件进行引用；
				<head>
					<title></title>
					1.<link rel="stylesheet" type="text/css" href="样式表地址" />
					2.<style>
						@import "css/style.css"
					  </style>
				</head>
				
	3.css样式表特征：
		1.继承性
			大部分的样式属性是可以继承的；
			body{font-size:12px;} 
			body里的标签都可以继承；

		2.层叠性
			可以为一个标签定义多个样式；
			h1{color:red;}
			h1{border:1px solid #ccc;color:green;}
			后面的属性覆盖前面的；
			如果在内部和内联也有重复的，看优先级；

	******* 3.优先级
			内联样式优先级最高；
			内部和外部看引入顺序；就近原则；

		4.调整优先级
			选择器{属性：属性值 !important;}

	4.选择器：决定哪些元素使用当前样式；
		1.通用选择器
		 表示：*{}
			可以与任何元素匹配，多数用在设置网页整体默认样式；
			*{font-family:"Microsoft Yahei";}

		2.元素（标签，标记）选择器（样式）
		 表示：元素名称 div / p{}
			用html标记名作为选择器的名称
			用于设定某一标签的样式

		3.类选择器
		 表示：.className{}
**************** 注意：类名不能以数字开始；
		 使用：能够附带class属性都能使用类选择器；将元素的class属性设置为类名即可；
		       一个标签可以同时引用多个类选择器；
		       <div class="div1 div2"></div>

		4.类选择器和元素选择器结合使用
		  表示：元素.类  div.myclass{}
			又称为分类选择器；

		5.id选择器
		  表示：#idName{}
			使用html的id属性值作为css选择器名称；

		  id的作用：
			定义元素的唯一标识，js；
			匹配id样式；

		6.群组选择器（选择器分组）
			以“，”隔开的选择器列表；
			将相同的规则用于多个元素；
			通常用于定义共同部分的样式；  
		  表示：div,span,.name,#div1{}  用逗号隔开；

		7.后代选择器：以元素的层次关系来作为选择器名字; 
			根据元素的位置（层次）找到元素；修改样式；
		表示：    div a{}    用空格隔开；
			  .div a{}
			  .div .a{}
			  div a.name{}
			  <div>
				<a></a> 
			  </div>

		8.子代选择器
			只描述父子关系，标签嵌套也 局限于父子关系的嵌套；
		 表示：选择器1>选择器2{}

		9.伪类选择器：
			定义元素不同状态时的样式,为一些选择器添加特殊的效果；
			通过“：”作为结合符；
		  表示：选择器：伪类选择器{}
			  a元素： 未访问过的状态、鼠标悬停、激活时候的状态、访问过的状态
			  a:link{}    --------未访问过的状态
			  a:visited{} --------访问过的状态
			  a:hover{}   --------鼠标悬停
			  a:active{}  --------激活时候的状态
		*******   浏览器兼容顺序：l v h a;  --ie6
		
		伪类分类：
			链接伪类：
				:link{}    --------未访问过的状态
				:visited{} --------访问过的状态
			动态伪类：
				:hover{}   --------鼠标悬停
				:active{}  --------激活时候的状态
				:focus{}   --------元素获取焦点时的状态

			目标伪类
			元素状态伪类
			结构伪类
			否定伪类

	5.选择器的优先级：
		内联 > ID > 类选择器、伪类选择器 > 元素选择器
		类选择器、伪类选择器：级别相同，后定义的优先；
			
	6.尺寸与边框；
		1.css单位
			固定：
			in : 英寸
			cm
			mm
			pt
			相对：
			px : 计算机屏幕的一个点，根据屏幕分辨率的大小，这个点的大小不同
			% 
			em : 1em等于当前的字体尺寸，2em等于当前的字体尺寸的两倍；
		2.颜色单位
			 rgb(x,x,x)   : RGB值
					如rgb(255,0,0)红，rgb(0,0,0)黑，rgb(255,255,255)白；
			 rgb(x%,x%,x%): RGB百分比
					如rgb(100%,0%,0%)
			 #rrggbb      : 十六进制
					每一位的取值是：0~9,a~f;
			 #rgb         : 简写十六进制
			 英文单词
		3.尺寸：
			- width
			- min-width
			- max-width

			-height

		*******  哪些元素适合设置尺寸属性
			1.所有块级元素
			2.大部分行内元素不能使用；span；有些本身存在width和height的行内元素可以使用：img

		4.溢出：
			使用尺寸属性控制框的大小时，如果内容所需的空间大于框的本身，会导致内容溢出；
			- overflow:
				-- visible
				-- hidden
				-- scroll
				-- auto
			- overfolw-x
			- overfolw-y
		5.边框：
			- 简写方式： 
				border:width style color;
				border:1px solid #ccc;
			- 单边定义：
				border-left/right/top/bottom:
				border-width:
				border-style:
				border-color:
				border-left/right/top/bottom-width:
				border-left/right/top/bottom-style:
				border-left/right/top/bottom-color:
			- 边框倒角（圆角）：
				border-radius:数值/百分比;
				border-top-left-radius:
				border-top-right-radius:
				border-bottom-left-radius:
				border-bottom-right-radius:
			- 边框阴影：
				box-shadow:
					值：
					h-shadow : 水平阴影便宜距离*
					v-shadow ：垂直阴影便宜距离*
					blur     ：模糊程度
					spread   ：阴影尺寸
					color    ：阴影颜色
					inset    ：将外部阴影改为内部阴影；
			- 图片边框：
				有图片作为元素的边框显示效果
				border-image:
					值：
					src
					width
					repeat :repeat / round / stretch
						平铺      铺满    拉伸
				border-image-source:url(路径)；
				border-image-width:
				border-image-repeat:
			- 轮廓：
				outline
				绘制于元素周围的一条线，在边框外围，主要起到突出的效果；
				语法：
				outline：
					值：
					color
					style
					width
				outline-color:
				outline-style:
				outline-width:
