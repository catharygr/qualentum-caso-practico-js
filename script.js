const colorOptions = ['ligth-grey','blue','green','yellow','orange','purple'];
const colorContainer = document.querySelector('.profile-color-options-container');
const profileColorOptions = document.querySelector('.profile-color-options');
const settingBtn = document.querySelector('.setting-btn');

for (let i = 0; i < colorOptions.length; i++) {
  const colorOption = colorOptions[i];
  const li = document.createElement('li');
  li.classList.add(colorOption, "box-color");
  colorContainer.appendChild(li);
  li.addEventListener('click', changeColor);
}

settingBtn.addEventListener("click", toggleColorContainer);

function toggleColorContainer() {
  profileColorOptions.classList.toggle("show");
 
}

function changeColor(e) {
 console.log(e.target.classList[0]);
 document.body.classList.remove(...colorOptions);
  document.body.classList.add(e.target.classList[0]);
}

