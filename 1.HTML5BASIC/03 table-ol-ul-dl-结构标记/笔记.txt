
1、table:
	属性：
	      width
	      height
	      border
	      bordercolor="color" ->边框颜色
	      align="center"      ->表格相对父元素的对齐方式
	      cellspacing="10px"  ->单元格间距
	      cellpadding="20px"  ->单元格与内容的边距padding
	      bgcolor="#ccc"      ->背景颜色
************* background="images/Lighthouse.jpg"->背景图片
	tr属性：
	      height:
	      align:               ->控制单元格里面的内容水平对齐方式
	      valign：top、middle、bottom ->垂直对齐方式
	td属性
	      width
	      height
	      bgcolor="#ccc"      ->背景颜色
	      background="images/Lighthouse.jpg"->背景图片
	      align:               ->控制单元格里面的内容水平对齐方式/
	      valign：top、middle、bottom ->垂直对齐方式 
	      colspan   ->跨列 向右合并；
	      rowspan   ->跨行 向下合并；
	表格标题：
		caption
	列标题：
		th：与td平级；
	行分组：
		表头行分组：  thead
		表主题行分组：tbody
		表尾行分组：  tfoot
	       
	

********如果tr和td都设置了width和height：值大的有效；

table布局的缺点：网页中要把所有的图像等都下载完才显示；
-----------------------------------------------------------------------


1.HTML5结构标记：
	<header></header>  页头
	<nav></nav>        导航
	<section></section>主体内容
	<article></article>引用的文章、帖子、博客.....
	<aside></aside>    侧导航、边栏等
	<footer></footer>  页尾

2.列表：
	显示多条相关信息的组件；
	1.有序列表；
		----type="i/a":序列类型   start="3" ：从3开始；

		<ol type="i" start="3">  order list  
			<li></li>  列表项 list item
		</ol>

	2.无序列表；
		-----type="square/circle/disk" 方块/空心圆/实心圆
		<ul type="square">  
			<li></li>
		</ul>
		ol和ul中间只能嵌套li，li里可以嵌套任何html标签；

	3.定义列表：
		<dl>
			<dt></dt> --标题 / 图
			<dd></dd> --文字描述
		</dl>
		图文混排

