function test() {
    var nowTime = $.now();
    $(".show-time-now").html(nowTime);
}
function clickme () {
	var nowTime = $.now()*2;
	console.log(nowTime);
}