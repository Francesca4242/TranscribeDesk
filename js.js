function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}




wordDB.forEach(w => {
	var e = w.element = w.element || document.createElement('word');
	e.innerText = w.word;
	e.style.color = rgb((1-w.accuracy)*255, w.accuracy*255, 0);
	e.style.left = w.left + 'px';
  e.style.top = w.top + 'px';
  e.contentEditable = true;
  document.getElementById('transcription').appendChild(e);
})


var start = null;
function animateWords(timestamp) {
  if (!start) start = timestamp;
  var progress = (timestamp - start)/3000;
  wordDB.forEach(w => {
    w.element.style.opacity = (1-progress)*Math.sin(Math.sqrt((w.left*w.left) + (w.top*w.top))/100-progress*20)+progress;
  });
  if (progress < 1.0) {
    window.requestAnimationFrame(animateWords);
  }

}

window.requestAnimationFrame(animateWords);
