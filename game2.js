$('#stage2').hide();
$('#stage3').hide();


 var desiredLength = 50; // no jokes please...

  // Listen to the change, keyup & paste events.
  $('#text-box').on('change keyup paste', function() {
    // Figure out the length of the input value
    var textLength = $('#text-box').val().length;

    // Calculate the percentage
    var percent = (textLength / desiredLength) * 100;
    // Limit the percentage to 100.
    if (percent > 100) {
      percent = 100;
      $('#takeoff').hide();

   }


    // Set the width of the bar based on the percentage.
    //$('.progress-bar').width(percent + '%');

    // Animate the width of the bar based on the percentage.
    $('.progress-bar').animate({
      width: percent + '%'
    }, 200)
  });



