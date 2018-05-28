function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}


$( init );

function init() {
  wordDB.forEach(w => {
	  var e = w.element = w.element || $("<word></word>");
	  e.text(w.word);
	  e.css('color', rgb((1-w.accuracy)*255, w.accuracy*255, 0));
	  e.css('left', w.left + 'px');
    e.css('top', w.top + 'px');
    e.prop('contenteditable',true);
    $('#transcription').append(e);
    e.draggable();
    e.on('dragstop', (ev, ui) => {
      w.top = ui.position.top;
      w.left = ui.position.left;
    });
  })


  var start = null;
  function animateWords(timestamp) {
    if (!start) start = timestamp;
    var progress = (timestamp - start)/3000;
    wordDB.forEach(w => {
      w.element.css('opacity', (1-progress)*Math.sin(Math.sqrt((w.left*w.left) + (w.top*w.top))/100-progress*20)+progress);
    });
    if (progress < 1.0) {
      window.requestAnimationFrame(animateWords);
    }

  }

  window.requestAnimationFrame(animateWords);
}
