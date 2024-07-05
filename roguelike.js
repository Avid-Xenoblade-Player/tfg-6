var hp = 0;
var temphp = 0;
var exc = 0;
var tempexc = 0;
var atk = 0;
var def = 0;
var mat = 0;
var mdf = 0;
var spd = 0;
var eva = 0;
var acc = 0;
var exp = 0;
var lvl = 1;
var enhp = 0;
var tempenhp = 0;
var enexc = 0;
var tempenexc = 0;
var enatk = 0;
var endef = 0;
var enmat = 0;
var enmdf = 0;
var enspd = 0;
var eneva = 0;
var enacc = 0;

document.getElementById("Slice").style.display = "none";
document.getElementById("Spin").style.display = "none";
document.getElementById("Thrust").style.display = "none";
document.getElementById("Magic").style.display = "none";
document.getElementById("Dodge").style.display = "none";
document.getElementById("Back").style.display = "none";

function setCharacterStats() {
  hp = getRandomInt(22, 45);
  temphp = hp;
  exc = getRandomInt(12, 35);
  tempexc = exc;
  atk = getRandomInt(10, 25);
  def = getRandomInt(10, 25);
  mat = getRandomInt(10, 25);
  mdf = getRandomInt(10, 25);
  spd = getRandomInt(8, 24);
  eva = getRandomInt(8, 24);
  acc = getRandomInt(1, 5);

  document.getElementById("Stats").innerHTML = `
    HP: ${temphp} out of ${hp} <br>
    Exc: ${tempexc} out of ${exc} <br>
    Atk: ${atk} <br>
    Def: ${def} <br>
    Spd: ${spd} <br>
    Eva: ${eva} <br>
    Mat: ${mat} <br>
    Mdf: ${mdf} <br>
    Acc: ${acc} <br>
	 Exp: ${exp} <br>
	 Lvl: ${lvl} <br>
  `;
}

function getRandomInt(min, max) {
  let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInt;
}

setCharacterStats();

function saveGame() {
        const gameData = {
          hp: hp,
			 temphp: temphp,
          exc: exc,
			 tempexc: tempexc,
          atk: atk,
          def: def,
          mat: mat,
          mdf: mdf,
          spd: spd,
          eva: eva,
          acc: acc,
		    exp: exp,
			 lvl: lvl,
        };
        localStorage.setItem('gameData', JSON.stringify(gameData));
        document.getElementById("saveLoadStatus").innerHTML = "Saved successfully.";
      }

 function loadGame() {
        const savedData = localStorage.getItem('gameData');
		  const gameData = JSON.parse(savedData);
		  let confirm = prompt("Data | HP: " + hp + ". ATK: " + atk + ". LVL: " + lvl + ". Please type CONFIRM to load.");
		  if (confirm == "CONFIRM" && savedData) { 
          hp = gameData.hp;
			 temphp = gameData.temphp;
          exc = gameData.exc;
			 tempexc = gameData.exc;
          atk = gameData.atk;
          def = gameData.def;
          mat = gameData.mat;
          mdf = gameData.mdf;
          spd = gameData.spd;
          eva = gameData.eva;
          acc = gameData.acc;
			 exp = gameData.exp;
			 lvl = gameData.lvl;
        document.getElementById("saveLoadStatus").innerHTML = "Game loaded successfully.";
		  document.getElementById("Stats").innerHTML = `
    		HP: ${temphp} out of ${hp} <br>
    		Exc: ${tempexc} out of ${exc} <br>
    		Atk: ${atk} <br>
    		Def: ${def} <br>
    		Spd: ${spd} <br>
    		Eva: ${eva} <br>
    		Mat: ${mat} <br>
    		Mdf: ${mdf} <br>
    		Acc: ${acc} <br>
	 		Exp: ${exp} <br>
	 		Lvl: ${lvl} <br>
  `;

        }
		}

function spawnMonster() {
  enhp = getRandomInt(22, 45);
  tempenhp = enhp;
  enexc = getRandomInt(12, 35);
  tempenexc = enexc;
  enatk = getRandomInt(10, 25);
  endef = getRandomInt(10, 25);
  enmat = getRandomInt(10, 25);
  enmdf = getRandomInt(10, 25);
  enspd = getRandomInt(8, 24);
  eneva = getRandomInt(8, 24);
  enacc = getRandomInt(1, 5);

  document.getElementById("Events").innerHTML = "A monster appears! <br>" + `
  	 HP: ${tempenhp} <br>
	 Exc: ${tempenexc} <br>
	 Atk: ${enatk} <br>
	 Def: ${endef} <br>
	 Spd: ${enspd} <br>
	 Eva: ${eneva} <br>
	 M Atk: ${enmat} <br>
	 M Def: ${enmdf} <br>
	 Acc: ${enacc}
  `;
	}

spawnMonster();

function showAttacks() {
  const attackButton = document.getElementById("Attack");
  const otherButtons = document.querySelectorAll("#Slice, #Spin, #Thrust, #Back");

  // Hide the Attack button
  attackButton.style.display = "none";

  // Show the other buttons (if hidden)
  otherButtons.forEach(button => {
    button.style.display = ""; // Reset display property to default (visible)
  });
}


function slice() {
	if (tempenhp > 0) {
	document.getElementById("nextMonster").style.display = "none";
		}
	var enemyRange = 0;
	var playerRange = 0;
	var enemySpeedCheck = 0;
	var playerSpeedCheck = 0;
	var damage = 0;
		enemyRange = getRandomInt((enacc*-1),(enacc));
		playerRange = getRandomInt((acc*-1),(acc));
		enemySpeedCheck = getRandomInt(1,20) + (20 - (enspd + enemyRange));
		playerSpeedCheck = getRandomInt(1,20) + (20 - (spd + playerRange));
		if (playerSpeedCheck > enemySpeedCheck) {
			playerAtk = getRandomInt(1,20) + (20 - (atk + playerRange));
			enemyDefence = getRandomInt(1,20) + (20 - (endef + enemyRange));
			damage = playerAtk - enemyDefence;
			if (damage < 1) {
				damage = 1;
				} else {
				damage = damage;
        }
			tempenhp = tempenhp - damage;
			document.getElementById("Events").innerHTML = "A monster appears! <br>" + `
  	 HP: ${tempenhp} out of ${enhp}. Dealt ${damage} damage. <br>
	 Exc: ${tempenexc} <br>
	 Atk: ${enatk} <br>
	 Def: ${endef} <br>
	 Spd: ${enspd} <br>
	 Eva: ${eneva} <br>
	 M Atk: ${enmat} <br>
	 M Def: ${enmdf} <br>
	 Acc: ${enacc}
  
  `; 
  hideAttacks();
		/*	} else if (playerSpeedCheck < enemySpeedCheck) {
			*/
		} else {
			document.getElementById("Events").innerHTML = "A monster appears! <br>" + `
			HP: ${tempenhp} out of ${enhp}. Missed! <br>
			Exc: ${tempenexc} <br>
			Atk: ${enatk} <br>
			Def: ${endef} <br>
	 		Spd: ${enspd} <br>
	 		Eva: ${eneva} <br>
	 		M Atk: ${enmat} <br>
	 		M Def: ${enmdf} <br>
	 		Acc: ${enacc}
	`;
	hideAttacks();
		}
if (tempenhp < 1) {
				tempenhp = 0;
				document.getElementById("Events").innerHTML = "Defeated!";
				const attackButton = document.getElementById("Attack");
 				const otherButtons = document.querySelectorAll("#Slice, #Spin, #Thrust, #Back");

  				attackButton.style.display = "";

  				otherButtons.forEach(button => {
    			button.style.display = "none";
  				});
				nextMonster.style.display = "";
	
				}
}

function hideAttacks() {
  const attackButton = document.getElementById("Attack");
  const otherButtons = document.querySelectorAll("#Slice, #Spin, #Thrust, #Back");

  attackButton.style.display = "";

  otherButtons.forEach(button => {
    button.style.display = "none";
  });
}

function enemyMessage(temp, max) {
	if (temp/max == 1) {
		document.getElementById("Events").innerHTML = "A monster appears!";
	} else if (temp/max >= 0.6 && temp/max < 1) {
		document.getElementById("Events").innerHTML = "Monster is on high health.";
	} else if (temp/max >= 0.3 && temp/max < 0.6) {
		document.getElementById("Events").innerHTML = "Monster is on medium health.";
	} else if (temp/max > 0 && temp/max < 0.3) {
		document.getElementById("Events").innerHTML = "Monster is on low health.";
	} else if (temp/max == 0) {
		document.getElementById("Events").innerHTML = "Defeated!";
	} else {
		document.getElementById("Events").innerHTML = "Odd... this shouldn't appear. Please contact if it does.";
	}
	}
	
/*
const newButton = document.createElement('button');
newButton.textContent = 'Click me!';
document.body.appendChild(newButton);
*/
