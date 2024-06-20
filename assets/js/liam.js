
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
const attributeButtons = document.querySelectorAll(".attribute-icon");
const resetButton = document.querySelector("#reset-button");
const confirmResetScreen = document.querySelector(".confirm-reset-screen");
const confirmResetButton = document.querySelector(".confirm-reset-button");
const cancelResetButton = document.querySelector(".cancel-reset-button");


const skill1IncreaseButton = document.querySelector("#skill1-increase");
const skill1DecreaseButton = document.querySelector("#skill1-decrease");
const consumableIncreaseButton = document.querySelector("#consumable-increase");
const consumableDecreaseButton = document.querySelector("#consumable-decrease");

const statsArea = document.querySelector(".stats-area");
const statsAreaToggleButton = document.querySelector(".character-stats-toggle-button");
const statsAreaSwitchButton = document.querySelector(".character-stats-switch-button");
const skillsArea = document.querySelector(".skills-area");



const lifeBar = document.querySelector(".life-bar");
const sanityBar = document.querySelector(".sanity-bar");
const lifeValue = document.querySelector(".life-value");
const sanityValue = document.querySelector(".sanity-value");


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

const skill1 = document.querySelector("#skill1");
const consumable = document.querySelector("#consumable");

const skill1Text = "Quanto mais dano recebe, ou mais louco fica, Liam também ficará mais forte.";
const consumableText = "Liam utiliza um de seus cigarros com substâncias misteriosas para recuperar sanidade.";


let liam;


function increaseAttribute(propertyName, element){
	liam[propertyName] ++;
	element.innerHTML = liam[propertyName];
}

function decreaseAttribute(propertyName, element){
	liam[propertyName] --;
	element.innerHTML = liam[propertyName];
}

function displayAttributes(){
	lifeValue.innerHTML = liam.life;
	sanityValue.innerHTML = liam.sanity;
	lifeBar.style.width = `${percentage(liam.life, liam.maxLife)}%`;
	sanityBar.style.width = `${percentage(liam.sanity, liam.maxSanity)}%`;
	fightAttribute.innerHTML = liam.fight;
	intelligenceAttribute.innerHTML = liam.intelligence;
	shotAttribute.innerHTML = liam.shot;
	atletismAttribute.innerHTML = liam.atletism;
	ocultismAttribute.innerHTML = liam.ocultism;
	medicineAttribute.innerHTML = liam.medicine;
	therapyAttribute.innerHTML = liam.therapy;
	skill1.innerHTML = liam.skill1;
	consumable.innerHTML = liam.consumable;
}

function resetStats(){
	window.localStorage.removeItem("liam_key");
	getLiam();
	displayAttributes();
	confirmResetScreen.classList.add("d-none");
}


const getLiam = () =>{
	try {
	//Variável recebendo o objeto salvo (não significa que ele exista, sendo assim, o teste não falha mesmo se o objeto não existir)
		liam = JSON.parse(window.localStorage.getItem("liam_key"));
	//Já a partir daqui, o código tenta atribuir os valores salvos no objeto da variável aos elementos html, algo que só vai acontecer se a variável liam possuir esses valores, ou seja, se ela recebeu um objeto salvo no localStorage.
	
	//Se os elementos não conseguirem receber os valores, significa que essees valores não existem, assim como o objeto requisitado, então o teste falha e passa para o catch
		lifeValue.innerHTML = liam.life;
		sanityValue.innerHTML = liam.sanity;
		lifeBar.style.width = `${percentage(liam.life, liam.maxLife)}%`;
		sanityBar.style.width = `${percentage(liam.sanity, liam.maxSanity)}%`;
		fightAttribute.innerHTML = liam.fight;
		intelligenceAttribute.innerHTML = liam.intelligence;
		shotAttribute.innerHTML = liam.shot;
		atletismAttribute.innerHTML = liam.atletism;
		ocultismAttribute.innerHTML = liam.atletism;
		medicineAttribute.innerHTML = liam.atletism;
		therapyAttribute.innerHTML = liam.atletism;
		skill1.innerHTML = liam.skill1;
		consumable.innerHTML = liam.consumable;
	}
	catch {
		liam = {
		life: 20,
		sanity: 15,
		maxLife: 20,
		maxSanity: 15,
		fight: 1,
		intelligence: 1,
		shot: 1,
		atletism: 1,
		ocultism: 1,
		medicine: 1,
		therapy: 1,
		skill1: 1,
		consumable: 1
		};
	}
	finally{
		displayAttributes();
	}
};

getLiam();


function percentage(numA, numB){
	return (numA/numB) * 100;
}

function changeHpSa(bar, barValue, propertyName, maxPropertyName){
	let newValue = parseInt(prompt("Insira o novo valor:"));
	if (isNaN(newValue)){
		newValue = 00;
	}
	if (newValue !== "" && newValue !== null && newValue !== 00){
		if (newValue > liam[maxPropertyName]){
			liam[maxPropertyName] = newValue;
		}
		liam[propertyName] = newValue;
		bar.style.width = `${percentage(liam[propertyName], liam[maxPropertyName])}%`;
	}
	barValue.innerHTML = liam[propertyName];
	window.localStorage.setItem("liam_key", JSON.stringify(liam));
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

skill1IncreaseButton.addEventListener("click", function(){
	increaseAttribute("skill1", skill1);
});

skill1DecreaseButton.addEventListener("click", function(){
	decreaseAttribute("skill1", skill1);
});

consumableIncreaseButton.addEventListener("click", function(){
	increaseAttribute("consumable", consumable);
});

consumableDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("consumable", consumable);
});

lifeValue.addEventListener("click", function(){
	changeHpSa(lifeBar, lifeValue, "life", "maxLife");
});

sanityValue.addEventListener("click", function(){
	changeHpSa(sanityBar, sanityValue, "sanity", "maxSanity");
});

attributeButtons.forEach(function(element){
	element.addEventListener("click", function(){
		window.localStorage.setItem("liam_key", JSON.stringify(liam));
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
