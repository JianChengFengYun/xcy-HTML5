
文本格式化：

1.控制字体：
	1.指定字体：
		font-family:可以出现多个值;

	2.字体大小：
		font-size:

	3.字体加粗：
		font-weight:
			    bold;   900
			    normal; 400
			    数值(100~900);
	4.字体样式(斜体):
		font-style:
			   normal;
			   italic;
	5.小型大写字母：
		font-variant:
			     normal;
			     small-caps;
	6.字体：
		font:font-style font-variant font-weight font-size font-family;
		font:12px Times,Arial,Microsoft Yahei;

2.控制文本格式：
	1.文本颜色：
		color：

	2.文本水平对齐方式：
		text-align:
			   left;
			   center;
			   right;

	3.文本线条修饰：
		text-decoration:
				none;
				underline;
				overline;	上划线
				line-through;	删除线
	
	4.行高：
		注意：如果行高的高度高于文字的高度，文字在这段区域垂直居中；
		line-height:
			    与所在容器设置相同高度；垂直居中！
	
	5.首行文本缩进：
		text-indent:
			    24px;
		
	6.文本阴影：
		text-shadow:h-shadow v-shadow blur color;

	7.文本溢出
		- 处理空白
		  white-space:
			      normal;
			      nowrap;不换行
		- 文本溢出
		  text-overflow:
				clip;溢出不显示
				ellipsis;超出的部分使用"省略号"代替

*************   注意：text-overflow 配合 overflow:hidden;使用，否则没效果；

	8.文本换行（英文）
		- 长英文文本：如（longlonglong）
		  word-wrap:
			    normal;	显示不完全的时候，整个长单词换行；
			    break-word;   显示不完全的时候，不关心单词是否完整，该换就换；
		- 文本换行
		  word-break:
			    normal;	
			    break-all;    不关心单词是否完整，该换就换；
			    keep-all;	  当单词到达边界后，用半角空格" "和连字符"-";
		     
			
3.表格属性：
	1.vertical-align:
			 top;
			 middle;
			 bottom;

	2.边框合并：
		border-collapse:加给table；
				separate;默认值 分隔；
				collapse;合并；

	3.边框边距：
		table的属性：cellspacing;
		border-spacing:
				v1;水平和垂直方向的间距都是v1；
				v1 v2;水平间距 垂直间距;

		**注意：border-spacing只有在border-collapse:separate;时才有效；

	4.标题位置：
		caption-side:
			     top;
			     bottom;


	5.显示规则
	  固定布局
		table-layout:
			     auto;列的宽度由单元格内容决定；
			     fixed;列宽度由td的width决定，不会被内容撑宽；


4.浮动：
	1.定位：
		- 普通（文档 ）流定位
		- 浮动定位
		- 相对定位
		- 绝对定位
	2.浮动：
		float:left/right;
		***任何元素都可以浮动；
*************** 当父框里的元素都浮动时；父框的高不会被撑开，给父框添加overflow:hidden;父框的高就可以被撑开；

	3.清除浮动：
		clear:left/right/both;
