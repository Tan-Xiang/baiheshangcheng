// 倒计时
var foo = 3600 * 3600;
function conuter() {
	if (foo >= 0) {
		shi = Math.floor(foo / 60 / 60 % 24);
		shi = shi < 10 ? "0" + shi : shi;
		fen = Math.floor(foo / 60 % 60);
		fen = fen < 10 ? "0" + fen : fen;
		mio = Math.floor(foo % 60);
		mio = mio < 10 ? "0" + mio : mio;
		jieshu = "仅剩" + shi + ':' + fen + ":" + mio ;
		document.all["timer"].innerHTML = jieshu;
		if (foo == 5 * 60) alert("距离结束仅剩5分钟");
		--foo;
	} else {
		clearInterval(timer);
		alert("时间到，结束!");
	}
}
timer = setInterval("conuter()", 1000);

