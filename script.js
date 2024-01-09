const inbox = [
    {
        title: "Rome Vacation",
        description: "Have to go to rome",
        dueDate: "27.5.24",
        priority: "High",
        check: true
    },
    {
        title: "JOb",
        description: "Have to go to Job",
        dueDate: "27.3.24",
        priority: "Low",
        check: false
    },
]

/*
arr = []; inbox
factory function will return a new todo or object
*/


function addTodoToList(){

    const title = prompt('Choose title');
    const description = prompt('note description');
    const dueDate = prompt('choose a date');
    const priority = prompt('choose priority');

    const createTodo = () => {
        if(priority == 'low' || priority == 'normal' || priority == 'high'){
        return {
            title: title,
            description: description,
            dueDate: dueDate,
            check: false,
            priority: priority,
            checkStatus() {
                console.log(`previous value was ${this.check} and was changed to ${!this.check}`)
                this.check = !this.check;
            }
        }
    }
    else {
        return console.log('pls choose priority between low high or normal')
    }
    }

    inbox.push(createTodo());
    console.table(inbox)
    
}

// function checkStatus(){
//     //reverse check status of todo if runed
//     let index = prompt('which task number you want to check');
//     if (!inbox[index]) {
//         return console.log('not any task ')
//     }
//     console.log(`Your selected task title is ${inbox[index].title} and its current value is ${inbox[index].check} will change to ${!inbox[index].check}`)
//     inbox[index].check = !inbox[index].check;
//     console.table(inbox)
// }

function changePriority(){
    //changes priority
}

function createNewProject(){
    //create new array based on arg provided
}

