const colorOptions = ['ligth-grey','blue','green','yellow','orange','purple'];
const colorContainer = document.querySelector('.profile-color-options-container');
const profileColorOptions = document.querySelector('.profile-color-options');
const settingBtn = document.querySelector('.setting-btn');
const profileBioContainer = document.querySelector('.profile-bio-container');

profileBioContainer.addEventListener('dblclick', editBio);

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




for (let i = 0; i < colorOptions.length; i++) {
  const colorOption = colorOptions[i];
  const li = document.createElement('li');
  li.classList.add(colorOption, "box-color");
  colorContainer.appendChild(li);
  li.addEventListener('click', changeColor);
}

settingBtn.addEventListener('click', toggleColorContainer);
console.log(settingBtn);

function toggleColorContainer() {
  profileColorOptions.classList.toggle("show");
 
}

function changeColor(e) {
 document.body.classList.remove(...colorOptions);
  document.body.classList.add(e.target.classList[0]);
}



