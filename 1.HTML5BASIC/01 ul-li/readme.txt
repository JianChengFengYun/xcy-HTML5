
【Web基础知识】

 web又称万维网或环球网，即WWW（World Wide Web）,把信息和服务进行无缝连接；
 
- Web与Internet：Web是运行在Internet的应用；

	1. Internet：互联网；信息共享；
	2. Internet提供的主要服务：Telnet（远程登录）、Email、WWW、BBS(电子公告板：天涯论坛、百度贴吧)、FTP（上下传协议、上传、下载）；
	3. 基本实现技术：
	 - 分组交换原理：信息在Internet上被分成许多小数据包（分组）进行传输，到达目的后将数据包重组为信息；
	 - TCP/IP协议族：用于找到指定的服务器；
	4. web简介 
	  又称万维网或环球网，即WWW
	  把各种类型的信息与服务无缝连接，提供生动的图形用户界面（文档）
	  - 信息：文字、图片、声音、视频等
	  - 服务：News、FTP、Telnet、Mail等
	  
- Web的工作原理

	现在计算机应用的程序结构：
	1. c/s : Client / Server
		客户端/ 服务器 模型
		通过指定的客户端来访问指定的服务器
		代表：QQ，魔兽世界，酷狗音乐盒...
	2. B/S :Browser / Server
	        浏览器 / 服务器 模型
		可以通过浏览器来访问指定服务器上的信息；
		http://www.baidu.com
	   B/S多于C/S;

	            请求（request）    
           浏览器---------HTTP协议-------->服务器
           浏览器 <-------HTTP协议------------服务器
                     响应（response）

	3. PC：Personal Computer:个人计算机；
	4. 通信协议采用的是HTTP协议：Hypertext Transfer Protocol
	   FTP协议：ftp：//10.1.1.1 只上传或下载文件，不作文本传输；
	   HTTP协议：超级文本传输协议；
	   - 规定了如何传递数据
	   -  以及传递的数据格式是什么
	   DNS:域名解析器；将域名解析为IP地址
	5. web主要以网页的形式来发布多媒体信息；
	  - 超文本标记语言HTML Hyper Text Markkup Language
	6. 浏览器连接到Web服务器并获取页面；

- Web服务器
	1. 主要功能：
	  - 存储web上的信息，提供管理环境
	  - 响应浏览器请求，执行服务器端程序
	  - 安全功能
	2. 主要服务器产品：TOMCAT IIS APACHE...
	
- Web浏览器
	1. 主要功能
	  - 提交请求
	  - 作为HTML解释器和内嵌脚本程序执行器
	  - 用图形化得方式显示HTML文档；
	2. 主要Web浏览器
	  IE Firefox Chrome Opera Safari

- Web的相关技术

	  client----Server-------DB（数据库 ）
	  
	1. 服务器端技术<----->数据库（DB）
	  - PHP
	  - JSP
 	  - ASP
	  - aspx
	  请求Request与响应（response）
	2. 客户端技术
	  - 表现：HTML CSS
          - 交互：JS

---------------------------------------------------------------

【HTML快速入门】
1. HTML概述：
	- web是一个超文本文件的集合；
	- 超文本：超文本文件是WEB的基本组成单元，也称为网页或HTML文档、web页等，通常以.html或.htm、.shtml为后缀的文件；web页通过超链接组织在一起；
	- web页之间通过超文本中的超级链接组织在一起；
	HTML HyperText Markup Language  超文本标记语言
	- 使用带尖括号的“标记”将网页的内容逐一标识出来；
	-由浏览器解释执行；
2. HTML 基本语法
	- 标记导致不同的显示效果；
	- 标记必须使用尖括号括起来；
	1、HTML：超文本标记语言
	2、HTML文档格式
	- 标记有封闭类型（成对），也有非封闭类型；
	  封闭：成对出现。有开始，有结束（双标签）
	  <a> :开始
	  </a>：结束
	  非封闭：只有开始没有结束；（单标签）
	  <br>  :即表示开始，又可以表示结束；HTML5中可以这么写。
	  <br />:
	  <p></p>:双标签中,可以将一些文本写在标签内，这些文本收当前标签样式控制；
**********注意：封闭标签。必须成对出现；
3. 元素
	1. 即标记；
	- 元素可以包含文本内容和其他元素，也可以是空的；
	元素嵌套：
	- 嵌套顺序：用缩进的方式进行体现；
	<P>
	    <a></a>
	</p>
	2. 属性和值：
	  属性：用来修饰元素；
	- 属性的声明必须位于开始标签里；
	  <标记名称 属性名="属性值" 属性名="属性值"></标记名称>
	- 一个标签内、属性可以有多个、不分先后顺序、多个属性间用空格区分；
	  <p align="center">ppp</p>
	  align功能：控制文本在标签内的水平对齐方式 left / center / right;
**********标准属性（公共属性、通用属性）：大部分标签所具备的属性；
	  - id    : 定义所在标签唯一标识名称；
	  - title ：鼠标移到当前标签所在区域时所显示的文本；
	  - class ：引用样式表中的指定“类”样式；
	  - style ：定义当前标签的行内样式；
	3. 注释：不会被浏览器或服务器所翻译的内容；
	- 解释说明；
	<!--------html注释-------->
	/*********css注释*********/
	- 注释是不能嵌套；
	  <!--
		<!----错误----->
	  -->
	- 注释不能写在标签声明里；
	  <a <!-----错误----->></a>
	
4. HTML 与 XHTML
	1999年12月24日，W3C推荐标准HTML4.01；

	XHTML1.0 于2000年的1月26日成为W3C标准
	- 与HTML几乎相同；
	- 更严格、更纯净的HTML版本；
	  <p>This is a<br>paragraph
	XHTML 元素必须被关闭，空标记也要关闭；
	  <p>This is a<br />paragraph</p>

	HTML5:
	  更为简洁的HTML代码；
	  <p align="center">This is a<br />paragraph</p>
	  html5:
	  <p align=center>This is a<br>paragraph</p> 
********* 属性值加的引号""和结束标签的"/" 最好加上；

5. 文档结构
	1. 文档类型声明：
	- 放在DOCTYPE标签里；
	- Strict DTD 严格类型；
	- Transitional DTD 过度类型；html4.01与xhtml1.0之间过度；
	- Frameset DTD 框架类型，（很少用）
	-HTML5的文档类型声明：
	 <!DOCTYPE html>
        charset：字符集    
        ISO-8859-1：支持英文编码解析
        utf-8:支持中文，支持英文  
        <meta charset="utf-8">
	2. html页面：
	- <html></html>:整个网页里有且只有这一对根元素；
******* - 按照严格版本，版本是“xhtml1.0”且是严格模式（Strict DTD）时，html标签必须包括“命名空间标识符”
	  <html xmlns="http://www.w3.org/1999/xhtml"></html>
	-两个子元素：
	<html>
	  <head></head>
	  <body></body>
	</html>



































