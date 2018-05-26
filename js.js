function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}




wordDB.forEach(w => {
	var e = document.createElement('word');
	e.innerText = w.word;
	e.style.color = rgb((1-w.accuracy)*255, w.accuracy*255, 0);
	e.style.left = w.left + 'px';
  e.style.top = w.top + 'px';
  e.contentEditable = true;
  document.getElementById('transcription').appendChild(e);
})
