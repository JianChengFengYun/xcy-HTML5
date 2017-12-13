
1.相邻兄弟选择器
	P+b : 同一个父元素下p标签后面的第一个兄弟元素b；

2.通用兄弟选择器
	p~b : 同一个父元素下p标签后面的所有兄弟元素b；

3.属性选择器
	将元素属性用于选择器中，从而获取指定元素属性或者值得元素；

	语法：
	[属性] ： 匹配 "指定属性" 的 "所有" 元素；
	元素[属性] ： 匹配 "指定属性" 的 "指定" 元素；
		input[type] : 获取具备type属性的input；
		input[id]   : 获取具备id属性的input；

	元素[属性][属性] ：匹配 "多个指定属性" 的 "指定" 元素；
	-
	元素[属性="值"] ：匹配 "指定属性等于值" 的 "指定" 元素；
	元素[属性~="值"] ： 匹配 "指定属性中包含这个值(独立的单词)" 的 "指定" 元素；
	元素[属性^="值"] ： 匹配 "指定属性以指定值开始" 的 "指定" 元素；
	元素[属性*="值"] ： 匹配 "指定属性包含值(可以是非独立的单词)" 的 "指定" 元素；
	元素[属性$="值"] ： 匹配 "指定属性以指定值结束" 的 "指定" 元素；
	元素[属性!="值"] ： 匹配 "指定属性不等于值" 的 "指定" 元素；
			
4.目标伪类
	活动的HTML锚点，用于选取当前活动的目标元素；
	语法：
	:target 匹配所有活动锚点
	元素:target 匹配指定元素 "活动" 锚点

5.元素状态伪类
	主要匹配元素的禁用，启用，选中状态
	多数用在表单元素上；
	:disabled  匹配所有被禁用的元素
	:enabled  匹配所有被启用的元素
	:checked  匹配所有被选中的元素  用于单选和复选；

6.结构伪类
	从元素结构(层级结构)上进行划分；
	用于：找 第一个子元素，最后一个子元素，没有子元素，仅仅包含一个子元素 

	:first-child	匹配父元素的第一个子元素
	:last-child	匹配父元素的最后一个子元素
	:empty		匹配没有子元素的元素
	:only-child	匹配只有一个子元素的元素


7.否定伪类
	input:not([type="text"]){color:red;}
	input:not(:last-child){background:blue;}


8.伪元素选择器
	:first-letter 选取指定选择器的首字符； 
		p:first-letter{
			font-size:40px;
		}
		一帮用于排版，首字符突出等；

	:first-line 选取指定选择器的首行字符；

	::selection 匹配用户的选取部分；
		如 选中的文本等




1.生成内容
	通过css向元素的前面和后面增加一部分内容；
	- 伪元素：
		:before 匹配到某一个元素最前面；
		:after  匹配到某一个元素最后面；
	内容生成：
		content：配合伪元素，插入生成内容；
		取值：  -- 字符串：纯文本，插入到指定的位置处；
			p:before{
				content:"至尊宝";
			}

			-- url 生成图像；
			a:before{
				content:url("images/11.jpg")
			}

*********************** -- 计数器 : 向已存在的html文本内容添加序号；
			   1.定义计数器(声明在body)
				属性：counter-reset
				作用 定义计数器，并设置初始值为0；
				body{
					counter-reset:计数器名称 初始值 计数器名称 初始值；
	
				}
				body{
					counter-reset:count 0;
	
				}
			   2.设置计数器的增量 
				可以单独设置某一选择器使用计数器时的增量，默认是1；
				属性：counter-increment
				div{
					counter-increment:count 10;
				}
			   3.使用计数器
				通过counter(计数器名称)来使用计数器
				div:before{
					content:"第"counter(count)"章";
				}


2.多列（分栏）
	-- 分隔列
		把一段文本拆分成列；
		column-count:数值;

	-- 列之间间隔
		列之间间隔宽度；
		column-gap:数值；

	-- 列规则
		列之间可以设置间隔线；
		column-rule:1px solid #ccc;


3.css hack
	- margin和padding
	  解决方案：*{margin:0px;padding:0px;}

	- 居中布局
	  IE6及低版本浏览器：通过父元素的text-align：center；
	  高版本：	  ：当前元素margin:0px auto;

	- 元素高度与内容
	  div：设置高10px；里面写上文本；
	  IE6：元素高度至少包括内容；
	  其他：内容超出元素；
	  解决方案：overflow:hidden;

	- 子元素设置上外边距 
	  IE6：正常
	  其他：子元素设置上外边距 变成了父元素的上外边距

	  解决方案：
		1.给父元素设置边框；
		2.改设置父元素的padding-top：


4.css内部hack
	- IE6:
		*cloor
		+color
		#color
		-color
		_color
	- IE7:
		*cloor
		+color
		#color
	- IE8:
		color:red\0;

	color:blue !improtant; IE7及以上版本；
******** 书写顺序：8 7 6；		

5.选择器hack
	在css选择器前加上一些只有特定浏览器才能识别的前缀；
	- ie6 : *前缀
	  <div class="div1"></div>
	  *.div1{}
	  
	- ie7 : *+前缀
	  <div class="div1"></div>
	  *+.div1{}
	  


6.HTML头部引用hack
	 <!--[if 条件]>
	 <![endif]-->
	 
	 IE6:
	 <!--[if IE 6]>
	   编写HTML
	   引入css
	 <![endif]-->

	 IE6以上:
	 <!--[if gt IE 6]>
	   编写HTML
	   引入css
	 <![endif]-->


