import document from 'document'

// TODO put all screen info into its own object
const NUM_SCREENS = 3
let screens = []
let curScreen = 0

const NUM_BUTTONS = 3
let buttons = []

let type2 = null

function init() {
	for (let i = 0; i < NUM_SCREENS; i++) {
		screens.push(document.getElementById('screen' + i))
	}

	for (let i = 0; i < NUM_BUTTONS; i++) {
		let but = document.getElementById('button' + i)
		but.onactivate = function() { showScreen(i-1%NUM_SCREENS) }
		buttons.push(but)
	}

	type2 = document.getElementById('type2button')

	// skip diabetes type selection page when already asked used
	if (readSettings('diabetes-type'))
		curScreen(1)
}

init()

type2.onactivate = (evt) => {
	console.log('Selected type 2!')
	curScreen(1)
	saveSettings('diabetes-type', 2)
}

// Gets or sets the current screen
function curScreen(n) {
	if (n)
		showScreen(n)
	return screens[curScreen]
}

// TODO
function saveSettings(key, value) {
	return null
}

// TODO
function readSettings(key) {
	return null
}

function showScreen(n) {
	curScreen().style.display = 'none'
	curScreen = n
	curScreen().style.display = 'inline'
}

// document.onkeypress = evt => {
//   if (evt.key === 'back') {
//     if (screens[2].style.display === 'inline') {
//       // Go to screen 2
//       showScreen(1);
//       evt.preventDefault();
//     } else if (screens[1].style.display === 'inline') {
//       // Go to screen 1
//       showScreen(0);
//       evt.preventDefault();
//     } else if (screens[0].style.display === 'inline') {
//       // Default behaviour to exit the app
//     }
//   }
// }

//Depending on value for mealTime, changes safeZone, which represents the safe blood sugar level 
function safeZone(mealtime) {
	let safezone = 140

	if (!mealtime)
		return 140

	if (age > 19)
		safezone = 180
	else if (age > 12)
		safezone = 200
	else if (age > 6)
		safezone = 225
	else
		safezone = 250

	return safezone
}
