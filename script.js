
const mainContainer = document.querySelector('.main-content')

function createTodo(title, description, dueDate, priority, check)  {
        return {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            check: extractCheckValue(check),
            changeStatus() {
                console.log(`previous value was ${this.check} and was changed to ${!this.check}`)
                this.check = !this.check;
            }
        }
}

function addTodoToList  (title, description, date, priority, checked)  {
    const newTodo = createTodo(title, description, date, priority, checked);
    if (newTodo.title != '') setItemToArray(newTodo)
}

function createProject(arrayName)  {
    //it will create a new project or a new array
    const newArr = [];
    localStorage.setItem(arrayName, JSON.stringify(newArr))
}

function setItemToArray(newTodo)  {
    if (localStorage.getItem("inbox") == null) {
      const vegeta = []
      localStorage.setItem('inbox', JSON.stringify(vegeta))
    }
    const returnedArray = JSON.parse(localStorage.getItem("inbox"))
  
    returnedArray.push(newTodo);
    localStorage.setItem("inbox", JSON.stringify(returnedArray))
  domMaker(newTodo, returnedArray.indexOf(newTodo));
}

function extractCheckValue(check)  {
  let incheon;
  check.forEach(item => {
    if (item.checked) {
      incheon = item.value
    }
  })
  return incheon
}

function removeItemFromArray(dataNumber){
    const derivedArray = JSON.parse(localStorage.getItem("inbox"));
    if (dataNumber) derivedArray.splice(dataNumber, 1);
    localStorage.setItem("inbox", JSON.stringify(derivedArray))
}

function removingelement(element){
  element.remove();
  setDataAttribute();
}

function setDataAttribute(){
  let i = 0;
  const listNodes = document.querySelectorAll('.newTodo')
  listNodes.forEach(item => {
    item.dataset.number = i;
    i++;
  })
}

function domMaker(newtodo, index){
  const latestDom =  `<div class='newTodo' data-number=${index}>
  <div class='part1'><input type='checkbox' id='task-done'><p class='title'>${newtodo.title}</p>
  <p class="description">${newtodo.description}</p>
  <button class="edit">Edit</button><button
  class="removeTodo">❌</button></div></div>`
  mainContainer.innerHTML += latestDom;
  removerFuck()
}


(function dialogHandler(){

  getLatestItem();
  
  const button = document.querySelector('.main-button');
  button.addEventListener('click', () => {
    dialog.showModal()
  });
  
  const dialog = document.querySelector('#favdialog');
  const title = dialog.querySelector('#title');
  const description = dialog.querySelector('#description')
  const date = dialog.querySelector('#date')
  const priority = dialog.querySelector('#priority');
  const checked = dialog.querySelectorAll('input[type="radio"]');
  const confirmBtn = dialog.querySelector('#confirm-button');
  const cancelBtn = dialog.querySelector('#cancel-button');

  confirmBtn.addEventListener('click', ()=> {
    if (title.value !== ''){
      addTodoToList(title.value, description.value, date.value, priority.value, checked)
    }
  })

  cancelBtn.addEventListener('click', (e) => {
    dialog.close();
    e.preventDefault();
  })
})();

function getLatestItem(){
  if(localStorage.getItem('inbox') == null) return;
  
  const lastItems = JSON.parse(localStorage.getItem('inbox'));

  lastItems.forEach(item => {
    domMaker(item, lastItems.indexOf(item))
  })
}

function removerFuck(){
  const lostOfAllNodes = document.querySelectorAll('.newTodo');
  lostOfAllNodes.forEach(node => {
    const deletedNode = node.querySelector('.removeTodo');
    deletedNode.addEventListener('click', ()=>{
      removeItemFromArray(node.dataset.number)
      removingelement(node);
    })
  })
}