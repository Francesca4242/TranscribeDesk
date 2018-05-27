




$('#stage2').hide();
$('#stage3').hide();

$('#takeoff').click(function() {

	$('#stage1').hide(1000);
	$('#stage2').show(1000);

});

$('#start').click(function(){
	startgame();
	
})

$('#takeoff2').click(function() {

	$('#stage3').hide(1000);
  startgame();
});

