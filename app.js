/* Variables
-------------------------------------------------- */

// Create a new speechSynthesis object
var synth = window.speechSynthesis;

var subjectArray = ['The cat', 'The dog', 'The horse', 'The bird', 'The fish'];
var verbArray = ['ran', 'jumped', 'flew', 'swam', 'crawled'];
var adjectiveArray = ['happy', 'sad', 'tired', 'energetic', 'hungry'];
var objectArray = ['the ball', 'the stick', 'the book', 'the toy', 'the bone'];
var placeArray = ['in the park', 'at home', 'at the beach', 'in the forest', 'at the zoo'];

var textToSpeak = '';
var story = '';

var subjectButton = document.getElementById('subjectButton');
var verbButton = document.getElementById('verbButton');
var adjectiveButton = document.getElementById('adjectiveButton');
var objectButton = document.getElementById('objectButton');
var placeButton = document.getElementById('placeButton');
var storyButton = document.getElementById('storyButton');
var resetButton = document.getElementById('resetButton');

var speakButton = document.getElementById('speakButton');
var textToSpeakInput = document.getElementById('textToSpeak');
var storyOutput = document.getElementById('story');


/* Functions
-------------------------------------------------- */

function getRandomWord(wordArray) {
	var index = Math.floor(Math.random() * wordArray.length);
	return wordArray[index];
}

function generateStory() {
	var subject = getRandomWord(subjectArray);
	var verb = getRandomWord(verbArray);
	var adjective = getRandomWord(adjectiveArray);
	var object = getRandomWord(objectArray);
	var place = getRandomWord(placeArray);
	story = subject + ' ' + verb + ' ' + adjective + ' ' + object + ' ' + place + '.';
	return story;
}

function updateTextToSpeak() {
	textToSpeak = story;
	textToSpeakInput.value = textToSpeak;
  
	// Create a new speech utterance
	var utterance = new SpeechSynthesisUtterance(textToSpeak);
  
	// Speak the utterance
	synth.speak(utterance);
  }
  speakButton.onclick = function() {
	updateTextToSpeak();
  }
	

function resetStory() {
	story = '';
	storyOutput.innerHTML = '';
	textToSpeak = '';
	textToSpeakInput.value = '';
}


/* Event Listeners
-------------------------------------------------- */

subjectButton.onclick = function() {
	var subject = getRandomWord(subjectArray);
	story += subject + ' ';
	storyOutput.innerHTML = story;

	verbButton.onclick = function() {
		var verb = getRandomWord(verbArray);
		story += verb + ' ';
		storyOutput.innerHTML = story;
	  };
	  
	  adjectiveButton.onclick = function() {
		var adjective = getRandomWord(adjectiveArray);
		story += adjective + ' ';
		storyOutput.innerHTML = story;
	  };
	  
	  objectButton.onclick = function() {
		var object = getRandomWord(objectArray);
		story += object + ' ';
		storyOutput.innerHTML = story;
	  };
	  
	  placeButton.onclick = function() {
		var place = getRandomWord(placeArray);
		story += place + '.';
		storyOutput.innerHTML = story;
	  };
	  
	  storyButton.onclick = function() {
		generateStory();
		storyOutput.innerHTML = story;
	  };
	  
	  resetButton.onclick = function() {
		resetStory();
	  };
	  
  };
  

  