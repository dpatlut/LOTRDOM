console.log("LINKED");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];
// Our Setting
var lands = ['The Shire', 'Rivendell', 'Mordor'];
// Starter code for the body
var body = document.querySelector('body');
//1
function middleEarth(){
 	var middleEarth = document.createElement('section');
 	middleEarth.setAttribute('id', 'middleEarth');
 	len = lands.length;
 	for(var x=0; x<len; x++){
 		var land = document.createElement('article');
 		land.innerHTML = '<h1>' + lands[x] + '</h1>';
 		land.setAttribute('class', lands[x]);
 		middleEarth.appendChild(land);
 	}
 	body.appendChild(middleEarth);
 	}

middleEarth();

//2
var theShire = document.querySelectorAll('article')[0];
function makeHobbits(){
	var len = hobbits.length;
	var hobbitsAll = document.createElement('ul');
	for(var x = 0; x<len; x++){
		var hobbit = document.createElement('li');
		hobbit.className = 'hobbit'
		hobbit.innerText = hobbits[x];
		hobbitsAll.appendChild(hobbit);

	}
	theShire.appendChild(hobbitsAll);
}
makeHobbits();

//3
var frodo = body.querySelectorAll('li')[0];
function keepItSecretKeepItSafe(){
	var theRing = document.createElement('div');
	theRing.setAttribute('id', 'the-ring');
	theRing.setAttribute('class', 'magid-imbued-jewelry');
	frodo.appendChild(theRing);
}
keepItSecretKeepItSafe();

//4
var rivendell = body.querySelectorAll('article')[1];
function makeBuddies(){
	var aside = document.createElement('aside');
	var buddyList = document.createElement('ul');
	var len = buddies.length
	for(x=0; x<len; x++){
		var buddy = document.createElement('li');
		buddy.innerText = buddies[x];
		buddyList.appendChild(buddy);
	}
	aside.appendChild(buddyList);
	rivendell.appendChild(aside);
}
makeBuddies();

//5

var strider = rivendell.querySelectorAll('li')[3];

function beautifulStranger(){
	strider.innerText = 'Aragon';
}
beautifulStranger();

//6

var hobbits = theShire.querySelectorAll('ul')[0];

function leaveTheShire(){
	rivendell.appendChild(hobbits);
}
leaveTheShire();

//7
var fellowshipAll = rivendell.querySelectorAll('li');
function forgeTheFellowship(){
	var theFellowship = document.createElement('div');
	theFellowship.setAttribute('id', 'the-fellowship');
	len = fellowshipAll.length
	for(i = 0; i<len; i++){
		theFellowship.appendChild(fellowshipAll[i]);
	}
	rivendell.appendChild(theFellowship);
}
forgeTheFellowship();

//8
var gandalf=fellowshipAll[0];
function theBalrog(){
	gandalf.innerText='Gandal the White'
	gandalf.style.border='3px solid gray'
}
theBalrog();

//9
var boromir = fellowshipAll[4];
function hornOfGondor(){
	alert('The Horn of Gondor has blown');
	boromir.style.textDecoration='line-through';
	boromir.parentNode.removeChild(boromir)
}
hornOfGondor();

//10
var mordor = document.querySelectorAll('article')[2];
var sam = fellowshipAll[6];
function itDangerousToGoAlone(){
	mordor.appendChild(frodo);
	mordor.appendChild(sam);
	var mountDoom = document.createElement('div');
	mountDoom.setAttribute('id', 'mount-doom');
	mordor.appendChild(mountDoom);
}
itDangerousToGoAlone();

//11
var gollum, theRing;

function weWantsIt(){
	gollum=document.createElement('div');
	gollum.setAttribute('id', 'gollum');
	theRing=frodo.querySelector('#the-ring');
	gollum.appendChild(theRing);
	var mountDoom = mordor.querySelector('#mount-doom');
	mountDoom.appendChild(gollum);

}
weWantsIt();

//12

function thereAndBackAgain(){
	gollum.parentElement.removeChild(gollum);
	var hobbits = document.querySelectorAll('.hobbit');
	var hobbitsList = document.createElement('ul')
	var len = hobbits.length
	for(x=0; x<len; x++){
		hobbitsList.appendChild(hobbits[x]);
	}
	theShire.appendChild(hobbitsList);
}
thereAndBackAgain();