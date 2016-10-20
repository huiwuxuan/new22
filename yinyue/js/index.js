var songListArr=[
				{
				name:"怒放的生命",	
				zuozhe:"汪峰",
				src:"audio/test.mp3"
				},
				{
				name:"后来",	
				zuozhe:"刘若英",
				src:"audio/test.mp3"
				},
				{
				name:"断点",	
				zuozhe:"张敬轩",
				src:"audio/test.mp3"
				},
				{
				name:"英雄的代价",	
				zuozhe:"荒山亮",
				src:"audio/test.mp3"
				},
				{
				name:"断点",	
				zuozhe:"张敬轩",
				src:"audio/bg.mp3"
				},
				{
				name:"英雄的代价",	
				zuozhe:"荒山亮",
				src:"audio/test.mp3"
				},
				{
				name:"断点",	
				zuozhe:"张敬轩",
				src:"audio/test.mp3"
				},
				{
				name:"断点",	
				zuozhe:"张敬轩",
				src:"audio/test.mp3"
				},
				{
				name:"英雄的代价",	
				zuozhe:"荒山亮",
				src:"audio/test.mp3"
				},
				{
				name:"断点",	
				zuozhe:"张敬轩",
				src:"audio/bg.mp3"
				},
				{
				name:"英雄的代价",	
				zuozhe:"荒山亮",
				src:"audio/test.mp3"
				},
				{
				name:"观剑不则声",	
				zuozhe:"霹雳英雄",
				src:"audio/test.mp3"
				}
];

$(function(){
	for(var i=0;i<songListArr.length;i++){
		$("article").append("<section class='sec'><p class='p1'>"+(i+1)+"</p>"+
		"<p class='p2'><b>"+songListArr[i].name+"</b><b>"+songListArr[i].zuozhe+"</b></p>"+
		"<p class='p3'><img src='img/laji.jpg' /></p></section>");
	}
	var num;
	$(".sec").on("click",function(){
		var index=$(".sec").index(this);
		$(this).siblings().css("background-color","#054859");
		$(this).css("background-color","#062d4b");
		num=index;
		$("audio")[0].src=songListArr[index].src;
		$("audio")[0].play();
		setFunc();
	});
	
	var inc=0;
	$("#tu3").on("click",function(){
		/*if($("audio")[0].play()==true){
			$("audio")[0].pause();
			$("#tu3")[0].src="img/kaiguan2.jpg";
		}else{
			$("audio")[0].play();
			$("#tu3")[0].src="img/ff3.jpg";
		}
		*/
		inc++;
		if(inc%2==1){
			$("audio")[0].pause();
			$("#tu3")[0].src="img/kaiguan2.jpg";
		}else{
			$("audio")[0].play();
			$("#tu3")[0].src="img/ff3.jpg";
		}
		//alert("ok");
	});
	$("#prevsong").on("click",function(){
		num--;
		if(num>=0){
			$("audio")[0].src=songListArr[num].src;
			$("audio")[0].play();//alert(num);
		}else{
			alert("当前播放为第一首歌曲");
			num=0;
		}
		$(".sec").siblings().css("background-color","#054859");
		$(".sec").eq(num).css("background-color","#062d4b");
	});
	$("#aftersong").on("click",function(){
		num++;
		if(num<songListArr.length){
			$("audio")[0].src=songListArr[num].src;
			$("audio")[0].play();//alert(num);
		}else{
			alert("当前播放为最后一首歌曲");
			num=songListArr.length-1;
		}
		$(".sec").siblings().css("background-color","#054859");
		$(".sec").eq(num).css("background-color","#062d4b");
	});
	//点击改变进度条
	$("#jindutiaobox").on("click",function(e){
		var e=e||e.window;
		var offsetX=e.offsetX;
		//alert(offsetX);
		kuai=offsetX;
		var width=1280;
		var audios=$("audio")[0];

		var duration=audios.duration;
		fff=offsetX/width*duration;
		currentTime=fff;
		$("#jindutiao").css("width",offsetX+"px");
	});
})

var kuai;
var currentTime;
function jindutiao(){
		var audios=$("audio")[0];
		currentTime=audios.currentTime;
		var duration=audios.duration;
		var width=1280;
	    var kuai1=width/parseInt(duration);
		kuai=kuai1*currentTime;
		$("#jindutiao").css("width",kuai+"px");
	}
function setFunc(){
	setInterval(jindutiao,20);
}













