// worker文件就是一个JS文件 - 计数逻辑
var time = 0;
function addtime(){
	/*
	 * 将计算结果,传递给HTML页面中的Worker对象
	 * * postMessage()方法
	 *   * 在worker文件,全局对象就是Worker对象
	 *   * 在worker文件中,使用Worker对象的方法(直接使用)
	 *   * 当执行postMessage()方法时,会触发onmessage事件
	 */
	postMessage(time);
	time++;
	// 是window对象的
	setTimeout("addtime()",1000);
}
addtime();