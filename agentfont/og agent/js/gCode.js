var ogcode; //在全局定义验证码  
function createCode(id) {
	ogcode = "";
	var codeLength = 4; //验证码的长度  
	var checkCode = document.getElementById(id);
	var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
		'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数  
	for(var i = 0; i < codeLength; i++) { //循环操作  
		var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）  
		ogcode += random[index]; //根据索引取得随机数加到code上  
	}
	checkCode.innerHTML = ogcode; //把code值赋给验证码  
}
//校验验证码  
function validate(id) {
	var inputCode = document.getElementById(id).value.toUpperCase(); //取得输入的验证码并转化为大写     
	var checkCodeFlag = false;
	if(inputCode.length <= 0) { //若输入的验证码长度为0
		alert("请输入验证码！"); //则弹出请输入验证码  
	} else if(inputCode != ogcode) { //若输入的验证码与产生的验证码不一致时  
		alert("验证码输入错误"); //则弹出验证码输入错误  
		createCode(); //刷新验证码  
		document.getElementById(id).value = ""; //清空文本框  
	} else { //输入正确时  
		checkCodeFlag = true;
	}
	return checkCodeFlag;
}