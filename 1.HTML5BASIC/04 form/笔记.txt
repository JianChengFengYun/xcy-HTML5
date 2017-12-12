
1.表单：
	1.表单标签：<form></form>
		
		作用：用于定义表单中的基本信息，如提交地址，提交方式等。
*************** 如果表单元素没有出现在from里，是不能提交到服务器。
		
		属性：
		- action 提交地址 服务器处理数据的程序地址，由服务器端开发人员提供。默认提交到本页。
		- method 表单以什么方式将数据提交给服务器（明文还是密文） 默认值是get；
		         常用值：
			 1.post
			   - 密文  
			   - 有密码选post提交
			   - 不限传递数据长度
			 2.get 
			   - 明文
			   - 有传递数据长度限制  IE：2KB；
		- name    定义表单名称；方便使用js来获取表单；
		- enctype 表单数据的编码方式；
			  不同的数据使用不同的方式，主要体现在“普通文本”传输和“文件”传输上；
			  取值：
			  -- application/x-www-form-urlencoded 普通文本  默认按文本方式将数据传递；
			  -- multipart/form-data 上传文件时的编码值
			  -- text/plain 也是普通文本编码方式 但有时候不符合规定不能传；
			   

	2.表单元素（控件）：用于接受用户数据；
	  - input：
	         属性：
		    -- type：   用于区分不同的input元素的样式和功能；
		   	  1.text      ->txt 文本框 没有安全性；
			  2.password  ->txt 密码框 密文/密码录入；
				      ---文本框和密码框其他的属性:
				         maxlength:
					 readonly:
	***************** 3.checkbox  ->复选框 
					注意：作为一组复选框，name属性值必须一致；
			  4.radio     ->rdo 单选按钮
				     -- name 分组 
					     注意：如果一组单选按钮中只有一个能被选上，他们的name属性必须一样；
					     Gender  性别
					     Male
					     FeMale
				     -- checked
	
			  5.submit    -> 用于提交表单到服务器；
			    reset     -> 将所有表单元素恢复到默认值；
			    button    -> 执行自定义的脚本内容；
			  6.隐藏域    -> 在页面看不见的地方保存一段信息；如用户注册的id号；
			    hidden    -> 一般情况下，会将安全系数较高的并且不想让用户看见的数据保存在隐藏域中；
			    文件框    -> 能实现文件选择的功能；
				      ->上传文件；
	*******************　file　　注意：上传文件必须把form的属性enctype改成：multipart/form-data；


		    -- name：   当前表单元素的名称，用于提交给服务器使用； 
		    -- valve：  默认值；
		    -- disabled 禁用控件

	 - textarea 多行文本域 
	   <textarea></textarea> 使用场合：注册信息时的详细条款等。
	   属性：
		cols：指定文本区域的列数 一行显示多少个字；
		rows：指定文本区域的行数 显示多少行；      超出显示滚动条；
		    
	 - select与option : 从下拉框选择内容；
		   <select>
			<option>1</option>
			<option>2</option>
			<option>3</option>
		   </select>
		   分类：
		    1.下拉列表
		    2.滚动列表
		   select属性 sel
			    name：
			    size：显示被选信息数量 大于等于3条就显示滚动条；
			    multiple:是否多选；
		   option属性
			    value：   选项值
			    selected：预选中
		  
	 - 其他元素
		1.label: 与表单元素相关联；点击该lable时如同点击关联的表单元素；
		  <label>文本</label>
		  属性：
		  for：关联表单元素的id；
		2.为空间分组：
		  fieldset：为控件分组；
		  legend  ：分组的标题；


其他常用标记：
1.浮动框架：在一个页面中显示多个html文档内容，也就是将其他的页面嵌入到当前页面中；
	<iframe></iframe>
	属性：
	    src :浮动框架中的网页url；一个页面可以出现多个iframe
	    height：
	    width： 
	    frameborder:边框

2.摘要与细节：
       作用：将网页一部分信息通过类似于下拉列表的方式进行显示与隐藏；
        <details></details> 用于定义细节
	<summary></summary> 显示当前details的标题
	注意：summary必须要出现在details的第一个子元素的位置；

3.度量元素：
	<meter></meter>
	多数进度的显示、比例的显示。
	属性：
	min：范围的最小值；默认为0；
	max：范围的最大值；默认为1；
	value：度量值；默认为0；

4.时间元素：
	<time>显示内容</time> 定义公历时间24小时制；或日期；
	属性：
	datetime：规定日期和时间；日期与时间通过“T”来表示分割；

5.高亮显示文本元素：
	<mark>文本</mark>
	突出显示文本；




