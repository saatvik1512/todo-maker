const inbox = []

function createTodo()  {
    const title = prompt('Choose title');
        const description = prompt('note description');
        const dueDate = prompt('choose a date');
        const priority = prompt('choose priority');
        return {
            title: title,
            description: description,
            dueDate: dueDate,
            check: false,
            priority: priority.toLowerCase(),
            changeStatus() {
                console.log(`previous value was ${this.check} and was changed to ${!this.check}`)
                this.check = !this.check;
            },
            changePriority() {
                const opinion = prompt('Please type priority');
                if (checkPriority(opinion)) this.priority = opinion;
                console.log(`priority has been changed to ${opinion}`)
            }
        }
}

function addTodoToList()  {
    const newTodo = createTodo();
    const array_Name = prompt('Which array to add');
    if (newTodo.title != '' && checkPriority(newTodo.priority)) setItemToArray(newTodo, array_Name)
    console.table(inbox)
}

function checkPriority(word)  {
    const arr = ['low', 'high', 'normal'];
    if (arr.includes(word.toLowerCase())) return true;
    return false;
}

function createProject(arrayName)  {
    //it will create a new project or a new array
    const newArr = [];
    localStorage.setItem(arrayName, JSON.stringify(newArr))
}

function setItemToArray(newTodo, array_Name)  {
    if (localStorage.getItem(array_Name) == null) return
    const returnedArray = JSON.parse(localStorage.getItem(array_Name))
    returnedArray.push(newTodo);
    localStorage.setItem(array_Name, JSON.stringify(returnedArray))
}

function removeItemFromArray(){
    const arrayName = prompt('Name of the Array');
    const itemTitle = prompt('item of title');
    const derivedArray = JSON.parse(localStorage.getItem(arrayName));
    const index = derivedArray.findIndex(item => item.title === itemTitle);
    if (index !== -1) derivedArray.splice(index, 1);
    localStorage.setItem(arrayName, JSON.stringify(derivedArray))
}