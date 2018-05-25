function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}

wordDB = [
{word: "In", top: 27, left: 10, accuracy: 0.75},
{word: "the", top: 27, left: 45, accuracy: 0.15},
{word: "name", top: 27, left: 80, accuracy: 0.25},
{word: "of", top: 27, left: 120, accuracy: 0.50},
{word: "God", top: 27, left: 160, accuracy: 0.19},
{word: "Amen", top: 27, left: 180, accuracy: 0.40},
{word: "the", top: 27, left: 210, accuracy: 0.90},
]

wordDB.map(w => {
	var e = document.createElement('word');
	e.innerText = w.word;
	e.style.color = rgb((1-w.accuracy)*255, w.accuracy*255, 0);
	e.style.left = w.left + 'px';
    e.style.top = w.top + 'px';
    return e;
}).forEach(e => document.getElementById('transcription').appendChild(e));
