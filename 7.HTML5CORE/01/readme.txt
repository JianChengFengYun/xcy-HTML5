【HTML5】
HTML5目前最新的规范(标准)是2014年10月推出；
2005年左右出现HTML5版本(非标准)，W3C组织(两个组织定义H5规范)
HTML5版本之后，不在声明版本信息；HTML5规范内容实时更新；
HTML5：与js搭配使用；

【HTML5新表单】
1.type:
	- email ：
		验证逻辑不完整，只验证是否包含 @ ；
	- search ：
	- url ：
		验证逻辑不完整，只判断是否包含 http:// ；
	- tel ：
		电话号码类型:
		只能在移动端有效果，会弹出数字键盘；只能输入数字；
		pc端，可以输入英文；
	- number :
		数字类型：3个属性；
		min:
		max:
		step: 默认值1；
	- range ：
		范围类型:
		min：
		max：
		step：
		value：当前值；
	- color ：
		颜色类型：取色器；
	- date :
		日期类型；
	- week : 周
	- month : 月

2.新表单元素
	- datalist元素
		定义备选项，与option
		与input text搭配使用，input的list属性指向datalist的id；
		特点：
		数据与结构分离；预定义数据在datalist，结构input；
	- progress元素
		进度条；
		不同浏览器效果不同；2属性；
		- max 没有min属性，最小默认为0；
		- value 当前进度值；
	- meter元素
		刻度；
		- min
		- max
		- value
		- low  低预警值
		- high 高预警值
	- output元素
		输出；
		for属性
	
3.表单新属性
	- placeholder属性：
		类似于value； placeholder="请输入用户名"; 
		默认文本是灰色，并且 文本框获取焦点，输入时，默认文字自动消除；
	- multiple属性：
		允许文本框中输入多个值，用","隔开；
		只定义属性名，没有属性值
	- autofocus属性
		自动获取焦点
		只定义属性名，没有属性值
	- form属性
		值等于表单元素的id值；
		允许表单元素定义在表单之外；

4.表单新验证
	1.验证属性
		- required : 
			验证为空；
			提交时才提示；
		- pattern  ：
			不要斜线；pattern="[a-z]{6,12}"
			使用正则表达式验证元素值是否匹配；
			验证不了空；
			提交时才提示；
		- min max
			验证当前元素值的最小值和最大值；
			适用于type=number类型
			提交时才提示；
		- minlength maxlength
			验证当前元素值的最小长度和最大长度；
			提示是英文的；
			minlength:提交时才提示；不是H5的新属性；
			maxlength:输入时长度就不能大于指定值；
		- validity
			表单验证在H5中提供一个有效状态；有效状态通过validityState对象获取到，
			validityState对象可以通过validity属性得到；
	2.验证(有效)状态
		validityState对象提供一系列有效状态
		***所有验证状态要配合验证属性使用；
		- valid
			元素所有"验证都通过"就返回true；
			Elem.validity.valid;
		
		以下验证返回true，都是验证错误；
		- valueMissing
			判断当前元素值是否为空。返回true false;
			配合required使用；
			Elem.validity.valueMissing;
		- typeMismatch
			判断当前元素是否匹配类型type；返回true false;
			配合email，number，url使用；
			email.validity.typeMismatch;
		- patternMismatch
			判断当前元素是否匹配正则表达式；返回true false;
			配合pattern使用；
			Elem.validity.patternMismatch;
		- tooLong
			判断当前元素是否匹配长度；返回true false;
			配合maxlength；
			**使用maxlength属性后，长度不会超出maxlength的值，tooLong很难出现这种情况；****逻辑完整性；
		- rangeUnderflow
			输入内容值小于min的值时，返回true；
			只能匹配min 不能与max比较；
			Elem.validity.rangeUnderflow;
		- stepMismatch
			判断当前元素值是否与step设置相同；
			只能匹配step，不和min max比较；
			Elem.validity.stepMismatch;

		- customError
			配合setCustomValidity()方法使用；只要用了此方法，customError就返回true；
			setCustomValidity()：
			作用：设置验证失败后的默认提示信息；
			问题：一旦使用该方法修改默认提示信息后，即使输入正确，错误提示信息依旧出现；
			解决：当输入正确时，调用该方法将信息设置为空"";
