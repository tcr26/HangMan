var gamesCategory = ['StarCraft', 'Need for Speed', 'Lineage', 'Rift', 'Dota', 'Tera', 'Guild Wars', 'Diablo', 'Duke Nukem', 'Unreal', 'Unreal Tournament', 'Quake', 'Doom', 'Civilization'];

var footballClubsCategory = ['Milan', 'Barcelona', 'Levski', 'CSKA', 'Juventus', 'Real Madrid', 'Paris Saint Germain', 'Inter', 'Valencia', 'Bayern Munchen', 'Liverpool', 'Arsenal', 'Manchester United', 'Borussia Dortmund', 'Wolfsburg', 'Lyon', 'Olympique Marseille', 'Cherno More', 'Spartak Varna'];

var countriesCategory =
["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
"Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia",
"Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos Keeling Islands", "Colombia", "Comoros", "Congo", "Democratic Republic of Congo", "Cook Islands", "Costa Rica", "Cote dIvoire", "Croatia", "Cuba", "Cyprus", "Czech Republic",
"Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands Malvinas", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana",
"French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Heard and McDonald Islands", "Holy See Vatican City State", "Honduras", "Hong Kong", "Hungary",
"Iceland", "India", "Indonesia", "Islamic Republic of Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Democratic Peoples Republic of Korea", "Republic of Korea", "Kuwait", "Kyrgyzstan", "Peoples Democratic Republic Lao", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania",
"Luxembourg", "Macau", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Federated States of Micronesia", "Republic of Moldova",
"Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan",
"Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn Island", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
"Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka",
"St Helena", "St Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Province of China Taiwan", "Tajikistan", "United Republic of Tanzania", "Thailand", "Togo", "Tokelau", "Tonga",
"Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan",
"Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Virgin Islands", "Wallis and Futuna Islands", "Western Bulgaria", "Western Sahara", "Yemen", "Serbia", "Kosovo", "Montenegro", "Zambia", "Zimbabwe"];

var categoriesList = gamesCategory, footballClubsCategory, countriesCategory;
var buttonElement = document.getElementById('newGame');
var chooseCategory = document.getElementById('selectCategory');
var userInput = document.getElementById('input');
var triedLetters = document.getElementById('triedLetters');
var tryLetter = document.getElementById('try');
var games = chooseCategory.value === 'games';
var football = chooseCategory.value === 'footballClubs';
var durjavi = chooseCategory.value === 'countries';
var wordDiv = document.getElementById('word');
var guessesLeft = document.getElementById('guessLeft');
var checkbox = document.getElementById('tip');
var lifeLeft;
var word;
var string = '';
var currentLetter;
var triedLettersCheck = [];
var allowedLetters = /^[A-Za-z]+$/;

document.onkeypress = function(e) {
  e = e || window.event;
  if (e.keyCode === 13) {
    tryLetter.click();
    userInput.value = '';
  }
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(elements) {
  var randomInt = getRandomInt(0, elements.length - 1);
  var element = elements[randomInt];
  return element.toLowerCase();
}

function newGame() {
  string = '';
  if (newGame) {	
    var asd = getRandomElement(categoriesList);
    getCategory(asd);
    userInput.value = '';
    triedLetters.innerHTML = '';
    currentLetter = '';
    triedLettersCheck = [];
    userInput.focus();
	location.reload();
  }
}

function getCategory (wordElement) {
  if (games) {
    wordElement = getRandomElement(gamesCategory);
    word = wordElement;
    guessesLeft.innerHTML = 5;
    lifeLeft = 5;
  }

  else if (football) {
    wordElement = getRandomElement(footballClubsCategory);
    word = wordElement;
    guessesLeft.innerHTML = 5;
    lifeLeft = 5;
  }

  else {
    wordElement = getRandomElement(countriesCategory);
    word = wordElement;
    guessesLeft.innerHTML = 10;
    lifeLeft = 10;
  }

  for (var i = 0; i < wordElement.length; i++) {
    wordElement.replace(allowedLetters);
      if (wordElement[i] === ' ') {
        string += ' ';
      } else {
        string += '-';
      }
    }

    if (checkbox.checked) {
      var newString = word.charAt(0) + string.substring(1);
      document.getElementById('word').innerHTML = newString;
      console.log(newString);
      console.log(word);
    } else {
      document.getElementById('word').innerHTML = string;
      console.log(string);
      console.log(word);
  }
}

function inputCheck() {
  userInput.value = userInput.value.toLowerCase();

  if (userInput.value === '') {
    alert('Please put a letter in the field!');
    return false;
  }

  else if (!userInput.value.match(allowedLetters)) {
    alert('Only English Letters, please!');
    return false;
  }

  else if (userInput.value.length > 1) {
    alert('One letter at a time!');
    userInput.value = '';
    return false;
  }

  for (var i = 0; i < triedLettersCheck.length; i+=1) {
    if (triedLettersCheck[i] === userInput.value) {
      alert('Yot already tried ' + triedLettersCheck[i]);
      userInput.value = '';
      return false;
    }
  }

  currentLetter = userInput.value;
  triedLettersCheck.push(userInput.value);
  triedLetters.innerHTML += currentLetter + ", ";
}

function wordCheck (element) {
  element = word.toLowerCase();
  var input = userInput.value.toLowerCase();
  var correct = 0;

  for (var i = 0; i < element.length; i+=1) {

    if (element[i] === input) {
      correct++;
      string = string.substring(0, i) + input + string.substring(i + 1, string.length + 1);

      if (checkbox.checked === true) {
        var newString = word.charAt(0) + string.substring(1);
        string = newString;
      }

      wordDiv.innerHTML = string;
    }
  }

  if (!userInput.value.match(allowedLetters)) {
    return;
  }

  if (userInput.value === '') {
    return;
  }

  if (correct === 0) {
    lifeLeft--;
    guessesLeft.innerHTML = lifeLeft;
  }
  victoryCheck(string);
}

function victoryCheck (elementMatch) {
  if (elementMatch === word) {
    alert(word + " is correct!");
    newGame();
  }
  else if (lifeLeft === 0) {
     alert('You Lose!');
     wordDiv.innerHTML = word;
	 var showWordOnLose = alert(word);
     var startNewGame = confirm('Do you want to start a new game?');
     if (startNewGame) {
       newGame();
     } else {
       return;
    }
  }
}

getCategory();
