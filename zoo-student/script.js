// Elementos a los que me voy a referir
const colorOptions = ['ligth-grey','blue','green','yellow','orange','purple'];
const colorContainer = document.querySelector('.profile-color-options-container');
const profileColorOptions = document.querySelector('.profile-color-options');
const settingBtn = document.querySelector('.setting-btn');
const profileBioContainer = document.querySelector('.profile-bio-container');
const modal = document.querySelector('.modal');
const divContainer = document.querySelectorAll('.gallery-item');
const closeModalBtn = document.querySelector('#close-modal');

closeModalBtn.addEventListener('click', () => {
  modal.close();
  document.querySelector('.modal-content').innerHTML = '';
}
);



divContainer.forEach(div => {
  div.addEventListener('click', () => {
    modal.showModal();
    const img = div.querySelector('img').src;
    const image = document.createElement('img');
    image.src = img;

    document.querySelector('.modal-content').appendChild(image);
  })
  console.log(div);
});

// Evento para editar bio
profileBioContainer.addEventListener('dblclick', editBio);

// Function para editar bio
function editBio() {
  const bio = profileBioContainer.querySelector('p');
  const input = document.createElement('input');
  input.type = 'text';
  input.classList.add('profile-bio-input');
  input.focus();
  input.value = bio.textContent;
  bio.textContent = '';

  profileBioContainer.appendChild(input);

  input.addEventListener('blur', () => {
    bio.textContent = input.value.trim();
    profileBioContainer.removeChild(input);
  })
}



// Iterar para crear los colores
for (let i = 0; i < colorOptions.length; i++) {
  const colorOption = colorOptions[i];
  const li = document.createElement('li');
  li.classList.add(colorOption, "box-color");
  colorContainer.appendChild(li);
  li.addEventListener('click', changeColor);
}

settingBtn.addEventListener('click', toggleColorContainer);
console.log(settingBtn);

// Funcion para mostrar los colores
function toggleColorContainer() {
  profileColorOptions.classList.toggle("show");
 
}

// Funcion para cambiar los colores
function changeColor(e) {
 document.body.classList.remove(...colorOptions);
  document.body.classList.add(e.target.classList[0]);
}



