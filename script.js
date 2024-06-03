const form = document.querySelector('#form');
const input = document.querySelector('.textarea');
const addButton = document.querySelector("#add-button");
const listContainer = document.querySelector('#list-container');

addButton.addEventListener('click', addTask);

function addTask (e){
  e.preventDefault();
  if (input.value === ''){
    alert ('You must write a task')
  }else{


    let task = document.createElement('li');
    let iconElement = document.createElement('i');
    iconElement.classList.add('fa', 'fa-trash-o');
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type','checkbox');
    const deleteBin = document.querySelector('.delete-bin');
    
    task.appendChild(iconElement);
    task.appendChild(checkBox);
    task.appendChild(document.createTextNode(input.value));
    listContainer.appendChild(task);

    input.value ="";
  
    iconElement.addEventListener('click', function(){
      listContainer.removeChild(task);
    });

    checkBox.addEventListener('change', function(){
      if (this.checked) {
        task.classList.toggle('done');
      } else {
        task.classList.remove('done');
      }
    });
  }
}

