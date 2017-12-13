【web worker】
基本内容：
	单线程和多线程；
	worker可以模拟多线程的效果；
	定义：--运行在后台的Javascript；
	****：不能访问页面，不能访问dom；
	      在worker中只能使用javascript中的ECMA；除了IE8以下都支持；

1.worker提供的API：
	- 检测浏览器是否支持worker
	       if( typeof(Worker) !== "undefined" ){
		 说明当前浏览器支持Web Worker
	       }else{
		 说明当前浏览器不支持Web Worker
	       }
	- 创建web worker对象
		new Worker(worker文件)
        - Worker对象
		onmessage事件
		postMessage()方法
		terminate()方法

【Web存储API】
	基本内容
	数据仓库 - 用于存储数据
HTML5存储系统
	localStorage(本地存储) - 替代Cookie
	sessionStorage(会话存储) - 替代Session(类似于内存)

	- sessionStorage
		setItem(key,value)方法
			作用 - 设置数据(新增|修改数据)
			新增数据 - key值是新的
			修改数据 - key值是存在的
			参数
			key - 作为存储数据的标识(唯一,不可重复)
			value - 存储的数据内容(number|string)
		getItem(key)方法
			作用 - 获取数据(读取数据)
			参数
			key - 根据key获取对应的数据内容
			返回值 - key对应的value值
		key(index)方法
			作用 - 根据索引值返回对应key
			参数
			index - 索引值
			返回值 - 返回key值
		removeItem(key)方法
			作用 - 删除数据
			参数
			key - 根据key删除指定数据内容
		clear()方法
			作用 - 将存储系统的所有数据删除(清空)
		length属性
			作用 - 返回当前存储系统的数据个数
	- localStorage
		提供的属性和方法与sessionStorage一致
		storage事件
		作用 - 实现多个窗口之间共享数据内容
		问题
		数据安全性低
		目前除Safari浏览器支持该事件,其他所有浏览器都不支持
	对于数据的操作
		新增 - setItem()
		查询 - getItem()
		length属性
		key(index)
		删除 - removeItem()
		clear()
		修改
		key(index) - key
		getItem() - value
		setItem(key,新value)

sessionStorage VS localStorage
	sessionStorage存储系统存储数据的特点
		当浏览器窗口关闭时,数据全部丢失
		当再次打开浏览器窗口时,数据不能使用
	localStorage存储系统存储数据的特点
		当浏览器窗口关闭时,数据依旧存储
		当再次打开浏览器窗口时,数据继续使用
		数据只能由用户删除

【 Web Socket(了解)】
	基本内容
	socket - 是一种网络协议
	网络协议 - SERVER&HTTP课程中的HTTP
WebSocket
	表示在HTML5页面中允许支持socket协议

	浏览器-服务器
	使用的网络协议 - http协议
	http协议的问题:
		短连接
		无状态

WebSocket提供的API
创建WebSocket对象
	var socket = new WebSocket(URL);
		URL - 是以"ws://"开始的
		创建Socket对象,建立连接
	WebSocket对象的方法
		send() - 向服务器端发送数据内容
		close() - 关闭socket链接
	WebSocket对象的事件
		onmessage事件 - 当服务器端向客户端发送返回数据时被触发
		onopen事件 - 当客户端与服务器端建立连接时被触发
	完成初始化功能
		onclose事件 - 当客户端与服务器端关闭链接时被触发
		完成资源释放功能
	WebSocket对象的属性
		readyState属性 - 表示服务器端的通信状态
			CONNECTING(数字值为0)，表示正在连接。
			OPEN(数字值为1)，表示已建立连接。
			CLOSING(数字值为2)，表示正在关闭连接。
			CLOSED(数字值为2)，表示已关闭连接。