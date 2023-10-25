
const colors = ['ligth-grey', 'red', 'blue', 'green', 'yellow', 'orange', 'purple'];
const listOfColors = document.querySelector('.profile-color-options-container');
// div con los colores
const containerOfColors = document.querySelector('.profile-color-options')
// buscar el engranaje
const settings = document.querySelector('.profile-settings-btn')
// Obtener el contenedor de bio
const bioContainer = document.querySelector('.profile-bio-container');
// Añadir listener para el doble click
bioContainer.addEventListener('dblclick', editBio);

//Obtenemos el dialog
const dialog = document.querySelector('#modal')
const closeModalButton = document.querySelector('#close-modal')

closeModalButton.addEventListener('click', () => {
	dialog.close()
	document.querySelector('.modal-content').innerHTML = ''
})
//Obtemos los contenedores de imagenes
const divsContainer = document.querySelectorAll('.gallery-item')

divsContainer.forEach((div) => {
	div.addEventListener('click', () => {
		dialog.showModal()
		const source = div.querySelector('img').src
		const image = document.createElement('img')

		image.src = source

		document.querySelector('.modal-content').appendChild(image)
	})
})

// función para editor la bio
function editBio() {

	const bio = bioContainer.querySelector('p')
	const input = document.createElement('input')
	input.type = "text"
	input.classList.add('profile-bio-input')
	input.value = bio.textContent
	input.focus()
	bio.textContent = ''

	bioContainer.appendChild(input);

	input.addEventListener('blur', () => {
		bio.textContent = input.value.trim()
		bioContainer.removeChild(input)
	})
}


for (let i = 0; i < colors.length; i++) {
	const color = colors[i];
	const li = document.createElement('li');
	li.classList.add(color, 'box-color');
	listOfColors.appendChild(li);
	li.addEventListener('click', changeColor)
}

settings.addEventListener('click', toogleColorsContainer)

function toogleColorsContainer() {
	containerOfColors.classList.toggle('show')
}

function changeColor(event) {
	const color = event.target.classList[0]
	document.querySelector('body').classList.remove(...colors)
	document.querySelector('body').classList.add(color)
}