
function addTodo() {
    const name = document.querySelector('.val').value;
    const dueDate = document.querySelector('.dates').value;

    if (name === '' || dueDate === '') {
        alert('Please fill out both the event and date fields.');
        return; 
    }
    todoList.push({ name, dueDate });

    document.querySelector('.val').value = '';
    document.querySelector('.dates').value = '';

    localStorage.setItem('todoList', JSON.stringify(todoList));

    render();
}
    

    // const todoList = [
    //     {
    //         name : 'Event-1',
    //         dueDate : 'Date'
    //     },
    //     {
    //         name : 'Event-2',
    //         dueDate : 'Date'
    //     }
    // ];

    const todoList = JSON.parse(localStorage.getItem('add')) || [] ;


    render();
    function render(){
        let todoHtml = '';
        
        todoList.forEach(function(todo,i){
            const { name , dueDate} = todo;

            const html = `
                <div>${name}</div>
                <div> ${dueDate}</div>
                <button onclick ="
                    todoList.splice(${i},1);
                    render();
                    " class="add-btn">Delete
                </button>
             `;
            todoHtml += html;
        });
        // for(let i = 0; i<todoList.length;i++){
        //     let todo = todoList[i];
        //     const { name , dueDate} = todo;

        //     const html = `
        //         <div>${name}</div>
        //         <div> ${dueDate}</div>
        //         <button onclick ="
        //             todoList.splice(${i},1);
        //             render();
        //             " class="add-btn">Delete
        //         </button>
        //      `;
        //     todoHtml += html;

            
        // }
        document.querySelector('.divs').innerHTML = todoHtml;
        // document.querySelector('.divs').style.backgroundColor = 'red';
        // document.querySelector('.divs').style.padding = '10px';

    }






function inner(){
    const name = document.querySelector('.val').value;
    const dueDate = document.querySelector('.dates').value;

    if (name === '' || dueDate === '') {
    alert('Please fill out both the event and date fields.');
    return; 
}
    // let name = document.querySelector('.val').value;
    // console.log(innerText) ;

    const dateInputElement = document.querySelector('.dates');
    // const dueDate = dateInputElement.value;


    todoList.push({
        // name:name,dueDate:dueDate;
        name,
        dueDate
    });
    console.log(todoList);
    document.querySelector('.val').value = '';
    document.querySelector('.dates').value = '';




    render();

    localStorage.setItem('add',JSON.stringify(todo));


}