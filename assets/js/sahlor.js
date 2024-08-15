
const fightIncreaseButton = document.querySelector("#fight-increase");
const fightDecreaseButton = document.querySelector("#fight-decrease");
const intelligenceIncreaseButton = document.querySelector("#intelligence-increase");
const intelligenceDecreaseButton = document.querySelector("#intelligence-decrease");
const shotIncreaseButton = document.querySelector("#shot-increase");
const shotDecreaseButton = document.querySelector("#shot-decrease");
const atletismIncreaseButton = document.querySelector("#atletism-increase");
const atletismDecreaseButton = document.querySelector("#atletism-decrease");
const ocultismIncreaseButton = document.querySelector("#ocultism-increase");
const ocultismDecreaseButton = document.querySelector("#ocultism-decrease");
const medicineIncreaseButton = document.querySelector("#medicine-increase");
const medicineDecreaseButton = document.querySelector("#medicine-decrease");
const therapyIncreaseButton = document.querySelector("#therapy-increase");
const therapyDecreaseButton = document.querySelector("#therapy-decrease");
const skillPointIncreaseButton = document.querySelector("#skill-point-increase");
const skillPointDecreaseButton = document.querySelector("#skill-point-decrease");
const attributeButtons = document.querySelectorAll(".attribute-icon");
const resetButton = document.querySelector("#reset-button");
const confirmResetScreen = document.querySelector(".confirm-reset-screen");
const confirmResetButton = document.querySelector(".confirm-reset-button");
const cancelResetButton = document.querySelector(".cancel-reset-button");


const statsArea = document.querySelector(".stats-area");
const statsAreaToggleButton = document.querySelector(".character-stats-toggle-button");
const statsAreaSwitchButton = document.querySelector(".character-stats-switch-button");
const skillsArea = document.querySelector(".skills-area");


const lifeBar = document.querySelector(".life-bar");
const sanityBar = document.querySelector(".sanity-bar");
const lifeValue = document.querySelector(".life-value");
const sanityValue = document.querySelector(".sanity-value");
const skillPoint1 = document.querySelector("#skill-point-1");
const skillPoint2 = document.querySelector("#skill-point-2");
const skillPoint3 = document.querySelector("#skill-point-3");


const fightAttribute = document.querySelector("#fight");
const intelligenceAttribute = document.querySelector("#intelligence");
const shotAttribute = document.querySelector("#shot");
const atletismAttribute = document.querySelector("#atletism");
const ocultismAttribute = document.querySelector("#ocultism");
const medicineAttribute = document.querySelector("#medicine");
const therapyAttribute = document.querySelector("#therapy");


const skillDescriptionScreen = document.querySelector(".skill-description");
const skillDescriptionScreenCloseButton = document.querySelector(".skill-description .close-button");
const skillDescriptionText = document.querySelector(".skill-description p");
const skill1Label = document.querySelector("#skill1-label");
const consumableLabel = document.querySelector("#consumable-label");


const skill1Text = "Sahlor pode utilizar seus amuletos para encarar diversas situações, seja para identificar uma criatura ou mesmo em combate.";
const consumableText = "Sahlor lança uma de suas âmpolas de água benta no inimigo, causando pouco dano mas com acerto garantido.";


let sahlor;
let skillPointsAttribute;


function increaseAttribute(propertyName, element){
	sahlor[propertyName] ++;
	element.innerHTML = sahlor[propertyName];
}

function decreaseAttribute(propertyName, element){
	sahlor[propertyName] --;
	element.innerHTML = sahlor[propertyName];
}

function displaySkillPoints(){
	if (sahlor.skillPointsAttribute == 3){
		skillPoint1.style.opacity = 1;
		skillPoint2.style.opacity = 1;
		skillPoint3.style.opacity = 1;
	}
	else if(sahlor.skillPointsAttribute == 2){
		skillPoint1.style.opacity = 1;
		skillPoint2.style.opacity = 1;
		skillPoint3.style.opacity = 0;
	}
	else if(sahlor.skillPointsAttribute == 1){
		skillPoint1.style.opacity = 1;
		skillPoint2.style.opacity = 0;
		skillPoint3.style.opacity = 0;
	}
	else {
		skillPoint1.style.opacity = 0;
		skillPoint2.style.opacity = 0;
		skillPoint3.style.opacity = 0;
	}
}

function displayAttributes(){
	lifeValue.innerHTML = sahlor.life;
	sanityValue.innerHTML = sahlor.sanity;
	lifeBar.style.width = `${percentage(sahlor.life, sahlor.maxLife)}%`;
	sanityBar.style.width = `${percentage(sahlor.sanity, sahlor.maxSanity)}%`;
	fightAttribute.innerHTML = sahlor.fight;
	intelligenceAttribute.innerHTML = sahlor.intelligence;
	shotAttribute.innerHTML = sahlor.shot;
	atletismAttribute.innerHTML = sahlor.atletism;
	ocultismAttribute.innerHTML = sahlor.ocultism;
	medicineAttribute.innerHTML = sahlor.medicine;
	therapyAttribute.innerHTML = sahlor.therapy;
	displaySkillPoints();
}

function resetStats(){
	window.localStorage.removeItem("sahlor_key");
	getSahlor();
	displayAttributes();
	confirmResetScreen.classList.add("d-none");
}


const getSahlor = () =>{
	try {
	//Variável recebendo o objeto salvo (não significa que ele exista, sendo assim, o teste não falha mesmo se o objeto não existir)
		sahlor = JSON.parse(window.localStorage.getItem("sahlor_key"));
	//Já a partir daqui, o código tenta atribuir os valores salvos no objeto da variável aos elementos html, algo que só vai acontecer se a variável sahlor possuir esses valores, ou seja, se ela recebeu um objeto salvo no localStorage.
	
	//Se os elementos não conseguirem receber os valores, significa que essees valores não existem, assim como o objeto requisitado, então o teste falha e passa para o catch
		lifeValue.innerHTML = sahlor.life;
		sanityValue.innerHTML = sahlor.sanity;
		lifeBar.style.width = `${percentage(sahlor.life, sahlor.maxLife)}%`;
		sanityBar.style.width = `${percentage(sahlor.sanity, sahlor.maxSanity)}%`;
		fightAttribute.innerHTML = sahlor.fight;
		intelligenceAttribute.innerHTML = sahlor.intelligence;
		shotAttribute.innerHTML = sahlor.shot;
		atletismAttribute.innerHTML = sahlor.atletism;
		ocultismAttribute.innerHTML = sahlor.atletism;
		medicineAttribute.innerHTML = sahlor.atletism;
		therapyAttribute.innerHTML = sahlor.atletism;
		skillPointsAttribute = sahlor.skillPointsAttribute;
	}
	catch {
		sahlor = {
		life: 13,
		sanity: 30,
		maxLife: 13,
		maxSanity: 30,
		fight: 1,
		intelligence: 1,
		shot: 1,
		atletism: 1,
		ocultism: 1,
		medicine: 1,
		therapy: 1,
		skillPointsAttribute: 3
		};
	}
	finally{
		displayAttributes();
	}
};

getSahlor();


function percentage(numA, numB){
	return (numA/numB) * 100;
}

function changeHpSa(bar, barValue, propertyName, maxPropertyName){
	let newValue = parseInt(prompt("Insira o novo valor:"));
	if (isNaN(newValue)){
		newValue = 0;
	}
	if (newValue !== "" && newValue !== null && newValue !== 0){
		if (newValue > sahlor[maxPropertyName]){
			sahlor[maxPropertyName] = newValue;
		}
		sahlor[propertyName] = newValue;
		bar.style.width = `${percentage(sahlor[propertyName], sahlor[maxPropertyName])}%`;
	}
	barValue.innerHTML = sahlor[propertyName];
	window.localStorage.setItem("sahlor_key", JSON.stringify(sahlor));
}


function displayDescriptionScreen(text){
	skillDescriptionScreen.classList.remove("d-none");
	statsAreaToggleButton.classList.add("pe-none");
	statsAreaSwitchButton.classList.add("pe-none");
	skillDescriptionText.innerHTML = text;
}



fightIncreaseButton.addEventListener("click", function(){
	increaseAttribute("fight", fightAttribute);
});

fightDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("fight", fightAttribute);
});

intelligenceIncreaseButton.addEventListener("click", function(){
	increaseAttribute("intelligence", intelligenceAttribute);
});

intelligenceDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("intelligence", intelligenceAttribute);
});

shotIncreaseButton.addEventListener("click", function(){
	increaseAttribute("shot", shotAttribute);
});

shotDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("shot", shotAttribute);
});

atletismIncreaseButton.addEventListener("click", function(){
	increaseAttribute("atletism", atletismAttribute);
});

atletismDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("atletism", atletismAttribute);
});

ocultismIncreaseButton.addEventListener("click", function(){
	increaseAttribute("ocultism", ocultismAttribute);
});

ocultismDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("ocultism", ocultismAttribute);
});

medicineIncreaseButton.addEventListener("click", function(){
	increaseAttribute("medicine", medicineAttribute);
});

medicineDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("medicine", medicineAttribute);
});

therapyIncreaseButton.addEventListener("click", function(){
	increaseAttribute("therapy", therapyAttribute);
});

therapyDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("therapy", therapyAttribute);
});

skillPointIncreaseButton.addEventListener("click", function(){
	if(sahlor.skillPointsAttribute < 3){
	sahlor.skillPointsAttribute ++;
	displaySkillPoints();
	}
});

skillPointDecreaseButton.addEventListener("click", function(){
	if(sahlor.skillPointsAttribute > 0){
	sahlor.skillPointsAttribute --;
	displaySkillPoints();
	}
});

lifeValue.addEventListener("click", function(){
	changeHpSa(lifeBar, lifeValue, "life", "maxLife");
});

sanityValue.addEventListener("click", function(){
	changeHpSa(sanityBar, sanityValue, "sanity", "maxSanity");
});

attributeButtons.forEach(function(element){
	element.addEventListener("click", function(){
		window.localStorage.setItem("sahlor_key", JSON.stringify(sahlor));
	});
});

resetButton.addEventListener("click", function(){
	confirmResetScreen.classList.remove("d-none");
});

confirmResetButton.addEventListener("click", function(){
	resetStats();
});

cancelResetButton.addEventListener("click", function(){
	confirmResetScreen.classList.add("d-none");
});


statsAreaToggleButton.addEventListener("click", function(){
	statsAreaToggleButton.classList.toggle("character-stats-toggle-button-hidden");
	statsArea.classList.toggle("stats-area-disabled");
	statsAreaSwitchButton.classList.toggle("opacity-0");
	statsAreaSwitchButton.classList.toggle("pe-none");
});

statsAreaSwitchButton.addEventListener("click", function(){
	statsArea.classList.add("stats-area-disabled");
	setTimeout(function(){
		skillsArea.classList.toggle("d-none");
		statsArea.classList.remove("stats-area-disabled");
	}, 700);
});

skillDescriptionScreenCloseButton.addEventListener("click", function(){
	statsAreaToggleButton.classList.remove("pe-none");
	statsAreaSwitchButton.classList.remove("pe-none");
	skillDescriptionScreen.classList.add("d-none");
});

skill1Label.addEventListener("click", function(){
	displayDescriptionScreen(skill1Text);
});

consumableLabel.addEventListener("click", function(){
	displayDescriptionScreen(consumableText);
});
