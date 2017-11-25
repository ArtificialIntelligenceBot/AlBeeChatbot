$(document).ready(function() {

  $speechInput = $("#inputAsk");
  $recBtn = $("#enableSpeech");
  $aiBtn = $("#inputSend");
  $grayBtn = $("#disableSpeech");

  $dialogBox = $("#dialog-container");

  // initial Connecion to AI Platform
  initDialogflow();

  // using HTML5 Speech API - SpeechRecognization
  /*
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
  */

  if ( typeof webkitSpeechRecognition !== "undefined" ) {
    $grayBtn.hide();
    $recBtn.show();
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
  } else {
    $recBtn.hide();
    $grayBtn.show();
  }

  // using HTML5 Speech API - SpeechSynthesis
  // if ( typeof speechSynthesis !== "undefined" ) {
  //  var msg = new SpeechSynthesisUtterance();
  //  var voices = window.speechSynthesis.getVoices();
  // }

  // Press Enter Key to Send!
  $speechInput.keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      $dialogBox.append('<div class="outText"><div class="outTextLeft"><div class="outTextLeftInside">' + $speechInput.val() + '</div></div><div class="outTextLRight"> <img class="img-circle" src="/images/boticons/guest.png" width="32px"> ' + "</div></div>");
      $dialogBox.scrollTop($dialogBox[0].scrollHeight);
      getResponse($speechInput.val());
      $speechInput.val('');
      $speechInput.attr("placeholder", "Type your question ..");
    }
  });

  // This might not be necessary anymore - updated with Placeholder
  $speechInput.on("click", function(event) {
      $speechInput.val('');
  });

  $recBtn.on("click", function(event) {
    $speechInput.val('Listening');
    switchRecognition();
    $recBtn.attr('src', '/images/redMic32.png');
  });


  $aiBtn.on("click", function(event) {
    // $dialogBox.append('<div class="inText"><b> You: </b>' + $speechInput.val() + "</div>");
    $dialogBox.append('<div class="outText"><div class="outTextLeft"><div class="outTextLeftInside">' + $speechInput.val() + '</div></div><div class="outTextLRight"> <img class="img-circle" src="/images/boticons/guest.png" width="32px"> ' + "</div></div>");
    getResponse($speechInput.val());
    $speechInput.val('Type your question .. ');
  });

  // =========

  $( "#speechSynthes" ).click(function() {
    $( this ).toggleClass( "glyphicon-volume-off" );
    $( this ).toggleClass( "glyphicon-volume-up" );
  });

  $( "#aboutalbeechatbot" ).click(function() {
    alert('Show About` Menu');
  });


  // initial HIDDEN
  function hideAllLayers() {
    // $( "#dialog-container" ).();
    $( "#messages-container" ).hide();
    $( "#events-container" ).hide();
    $( "#menu-container" ).hide();
  }

  $( ".getDialogs" ).click(function() {
    hideAllLayers();
  });

  $( "#getMenu" ).click(function() {
    hideAllLayers();
    $( "#menu-container" ).toggle();
  });

  $( "#getMessages" ).click(function() {
    hideAllLayers();
    $( "#messages-container" ).toggle();
  });

  $( "#getEvents" ).click(function() {
    hideAllLayers();
    $( "#events-container" ).toggle();
  });

  // =========

  function switchRecognition() {
    recognition.onresult = function(event) {
      var text = "";
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          text += event.results[i][0].transcript;
      }
      console.log(text);
      $speechInput.val(text);
      $recBtn.attr('src', '/images/blueMic32.png');
      $aiBtn.click();
    }
    recognition.start();
  }

  function getResponse(value) {

    sendText(value)
    .then(function(response) {
      var result;
      try {
        result = response.result.fulfillment.speech;
        $dialogBox.append('<div class="inText"><div class="inTextLeft"><img class="img-circle" src="/images/boticons/AlBeeChatAngelBot32.png"> </div><div class="inTextRight">' + result + '</div></div>');
        $dialogBox.scrollTop($dialogBox[0].scrollHeight);

        // testing Speech
        if ( $( "#speechSynthes" ).hasClass ('glyphicon-volume-up') ) {
          if ( typeof speechSynthesis !== "undefined" ) {
            var msg = new SpeechSynthesisUtterance();
            var voices = window.speechSynthesis.getVoices();
            msg.text = result;
            speechSynthesis.speak(msg);
            msg = null;
            speechSynthesis = null;
          } else {
            alert('Something goes wrong: speechSynthesis');
          }
        }

      } catch(error) {
        $dialogBox.append('<div class="inText"><div class="inTextLeft"><img class="img-circle" src="/images/boticons/AlBeeChatAngelBot32.png"> </div><div class="inTextRight">' + "Sorry. No Answer! Please try again!" + '</div></div>');
      }

    })
    .catch(function(err) {
      alert ("Something goes wrong: Bot Engine");
    });

  }
});
