
//Practical JS TODOS
 
//Display the Todos
/* Array version - Brainstorming Session
var todos = ['item1','item2','item3'];
 
function displayTodos(){
console.log('MyTodos: ', todos);
}
 
//Add todos
function addTodo(todo){
  todos.push(todo);
  displayTodos();
 
}
 
//change todos
 
function changeTodo(position, newValue){
todos[position] =newValue;
displayTodos();
 
}
 
//delete todos
 
function deleteTodo(position){
todos.splice(position, 1);
  displaytodos();
}
*/
 
//////////////////////////////////REAL VERSION using OBJECTS/////////////////////////////
//Objects//
//Store todos in Objects
 
// display Todo Method
//addTodo method
//changeTodo
var todoList = {
  todos:[],
  displayTodos: function(){
    if(this.todos.length===0){
        console.log("Your todo list is EMPTY");
    } else{
        console.log('My todos : ');
        for(var i =0;i<this.todos.length;i++){
         //Want toDo text on each
        if(this.todos[i].completed===true){
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodos: function(todoText){  //add Todos("hi")
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodos: function(position, todoText){
    //this.todos[position]=newValue;
    this.todos[position].todoText=todoText;
    this.displayTodos();
  },
  deleteTodos: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed =!todo.completed;
    this.displayTodos();
  },
  //add toggleAll function for todo
  toggleAll: function(){
    var totalTodos= this.todos.length;
    var completedTodos = 0;
    // get # of completed Todos
    for(var i =0;i<totalTodos;i++){
      if(this.todos[i].completed===true){
        completedTodos++;
      }
    }
// if everything is true, make everything false
    if(completedTodos===totalTodos){
      for(var i =0;i<totalTodos;i++){
        this.todos[i].completed=false;
      }
    } else{
      for(var i =0;i<totalTodos;i++){
        this.todos[i].completed=true;
      }
    }
 
    this.displayTodos(); // displays todos after toggleAll is called;
  }
};