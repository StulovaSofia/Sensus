$(function () {
	$('.slider').slick({
		arrows: true,
		slidesToShow: 3,
		infinite: true,
		responsive: [
			{
				breakpoint: 741,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});
	const accordion = document.getElementsByClassName('questions__item');

	for (i = 0; i < accordion.length; i++) {
		accordion[i].addEventListener('click', function () {
			this.classList.toggle('active')
		})
	}
});

// всем блокам прописываем style="display: none"
// кнопкам добавляем функции в onclick="nextBlock()"/"previousBlock()"
const blockName = "block"; // то что идет до цифры в id блока
const countBlocks = 13; // кол-во блоков, всего

let currentBlock = 1; // текущий блок, не трогаем

function nextBlock() {
	document.getElementById(blockName + currentBlock).style.display = "none";
	currentBlock = currentBlock < countBlocks ? currentBlock + 1 : currentBlock;
	document.getElementById(blockName + currentBlock).style.display = "block";
}

function previousBlock() {
	document.getElementById(blockName + currentBlock).style.display = "none";
	currentBlock = currentBlock > 1 ? currentBlock - 1 : currentBlock;
	document.getElementById(blockName + currentBlock).style.display = "block";
}

let img = 0;

function changeBlock(numBlock) {
	if (img !== 0) document.getElementById("img" + img).style.display = "none";
	else document.getElementById("button1").disabled = false;
	img = numBlock;
	document.getElementById("img" + img).style.display = "block";
}
