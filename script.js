const colorOptions = ['ligth-grey','blue','green','yellow','orange','purple'];
const colorContainer = document.querySelector('.profile-color-options-container');

for (let i = 0; i < colorOptions.length; i++) {
  const colorOption = colorOptions[i];
  const li = document.createElement('li');
  li.classList.add(colorOption, "box-color");
  colorContainer.appendChild(li);
  console.log(colorContainer);
}