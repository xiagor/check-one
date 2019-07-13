window.onload = function(){
	//获取li
	var informationBox_1=document.getElementById("information_box-1");
	var oli=informationBox_1.getElementsByTagName("li");
	//获取包裹在information_box-2的大div内容
	var oDiv=document.getElementsByClassName("tab");
	//使用循环依次得到li
	for(var i=0;i<oli.length;i++){
		oli[i].index=i;
		oli[i].onclick=function(){
			for(var j=0;j<oli.length;j++){
				oli[j].className='';
				oDiv[j].style.display="none";
			}
			this.className='act';
			oDiv[this.index].style.display="block";
		};
	}
};