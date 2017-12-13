
1.浏览器：解析HTML代码以及JS语言；
2.<head>元素：主要包含网页的说明信息；
	1.网页标题
	2.网页的编码格式；
	3.声明内部样式表；
	4.引入外部样式表；
	5.声明JS脚本；
	6.引入外部脚本；
	7.声明其它元素：关键字，描述等。
	- 标题：<title></title>:标签页，没有任何属性，只能出现在head里；
3.网页编码格式：
	1.默认编码：ISO-8859-1 -> 不支持中文；
	  - 改编码，通过meta标签
	    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
	     描述 描述内容类型
	    <meta charset="utf-8" />
	          字符集    utf-8
	2.添加的描述和关键字；
	  meta：一般作说明信息的声明；
	       - 常用属性：
	         http-equiv 修改编码
		 charset    修改编码
		 content
		 name
******** - 添加"关键字"：
	   <meta name="keywords" content="html,css,js,web前端" />  面向搜索引擎；
	 - 添加"描述"：
	   <meta name="description" content="描述内容" />  搜索出来对标题的解释；
4. 特殊字符：
	通过转义字符来标识特殊符号；如空格、<、>;
	转移字符：改变单词原有的意思，被解释成一种全新的意义；
	- & 与
	- &nbsp;空格
	- &lt; less than <
	- &gt; greater than >
	- 企业标识：&copy; company
	- &yen;人民币
5.文本样式：
	<b></b>     加粗
	<i></i>     倾斜
	<u></u>     下划线
	<s></s>     删除线
	<sup></sup> 上标
	<sub></sub> 下标
6.标题元素：
	<h1></h1>
	<h6></h6> 一级标题到六级标题；
7、分区元素
	1.块级元素：多数用于布局；
	 自己独自占一行的元素都称为块级元素，
	 div
	 ,p
	 ,hn(h1-h6)、
	 hr、
	 ol
	 、ul
	 、li 
	2.行内元素： 包围文本，方便为文本添加效果；
	 与其他的行内元素可以在一行内显示，
	 span,
	 b,
	 u,
	 i
	 s                            
********行内元素宽和高是由内容决定的，不受width和height控制；
8.水平线 ：<hr> horizontal
	常用属性：
	- size:水平线的粗细
	- width:水平线的长度；数值/百分比；
	- align：水平对齐方式
	- color:颜色；
---------------------------------------------------------------------------+

1.预格式化标签
	<pre></pre>:保留源文档中的格式，保留原来的空格和换行；
2.图像和链接
	目录结构：
	* 目录就是web站点中文件夹的名称；
	- 包含多个子目录
	- 
	1.URL(统一资源定位符)：要需找的资源的地址；路径 ；
	- 文件，图片、音视频、其他页面。

	  相对路径：相对于当前页面而言；
	    平级用名字，子级进目录，父级向上返；
	    Koala.jpg
	    img/Koala.jpg
	    ../Koala.jpg
	  根相对路径：
	    服务器上：以/开始
		    /images/user.jpg

	  绝对路径：又叫全路径，就是资源文件在计算机中的位置/文件从最高级目录下开始的完整的路径；无论当前资源路径是什么，使用绝对路径总能找到需要的资源；
	   D:/向成云/Day02/img/Koala.jpg
	   http://www.baidu.com/img/logo.png 
	   组成：
	     1.协议：http:// 
	     2.主机名/域名；www.baidu.com
	     3.目录路径； img
	     4.请求的资源名；logo.png 
	2.图像<img />；
	  图像格式：
	  - JPEG
	  - GIF
	  - PNG

	  src属性：指定显示的图像的路径
	  width属性：图像的宽
	  height属性：图像的高
	  title属性：鼠标移到图片上显示的文字
	  alt
	3.链接；
	  <a href="http://www.baidu.com">点击文本</a>
	  <a href="test2.html">点击文本</a>
	  <a href="c/test2.html">点击文本</a>
	  目标：target="_self"     在本页打开
		target="_blank"    在新页面打开
	  a标签也有title属性；
********** name属性：定义锚点名称；例子：“回到顶部”
	  --------------------------------------
	  链接接的各种表现形式：
	   1.下载资源：
	    <a href="test2.zip/rar">点击文本</a>
	   2.网页跳转： 
	    <a href="c/test2.html">点击文本</a>
	   3.电子邮件链接：
	    <a href="mailto:chengyun803@126.com">联系我们</a>
	   4.返回页面的空链接；
	     <a href="#"></a>
	   5.链接到javascript;

	   6.<a href="2015-9-01 课堂笔记.txt">打印出txt文档</a>
锚点：
	通过a定义锚点：
	HTML中的锚点相当于HTML文档中某个位置的记号；
	1.定义锚点；
	  <a name="anchorName"></a>
	2.跳转到锚点；
	  <a href="#anchorName">跳转到锚点</a>
	  锚点也可以指向id；

	  跳转其它页面锚点处：
	  <a href="页面URL#anchorName">跳转到锚点</a>

	     



















