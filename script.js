const inbox = []

function addTodoToList(){
    const createTodo = () => {
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
    const newTodo = createTodo();
    if (newTodo.title != '' && checkPriority(newTodo.priority)) inbox.push(newTodo)
    console.table(inbox)
}


function checkPriority(word){
    const arr = ['low', 'high', 'normal'];
    if (arr.includes(word.toLowerCase())) return true;
    return false;
}


function createProject(arrayName){
    //it will create a new project or a new array
    const newArr = new Array()
    arrayName = newArr;
    
}