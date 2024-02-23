// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { TodoService } from '../services/todo.service';
// import { Todo } from '../models/todo';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-todo-list',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './todo-list.component.html',
//   styleUrl: './todo-list.component.scss'
// })

// export class TodoListComponent implements OnInit{
//   todos: Todo[];
//   newTodoBody: string = ''; // Property to hold the new todo input value

//   constructor(private todoService: TodoService) {

//     this.ngOnInit(): void {
//       this.todoService.getTodos().subscribe(todos => this.todos = todos);
//     }

//     addTodo() {
//       if (!this.newTodoBody.trim()) {
//         // Prevent adding empty todos
//         return;
//       }

//       const todo = {
//         body: this.newTodoBody,
//         is_completed: false
//       };

//       this.todoService.createTodo(todo).subscribe(newTodo => {
//         this.todos.push(newTodo);
//         this.newTodoBody = ''; // Reset the input field after adding
//       });
//     }

//     updateTodo(todo: Todo) {
//       this.todoService.updateTodo(todo).subscribe(updatedTodo => {
//         const index = this.todos.findIndex( t => t.id === updatedTodo.id);
//         this.todos[index] = updatedTodo;
//       });
//     }

//     deleteTodo(id: number) {
//       this.todoService.deleteTodo(id).subscribe({
//         next: () => this.todos. = this.todos.filter(todo => todo.id !== id),
//         error: (err) => console.error(err)
//       });
//     }
//   }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
// }
// function addTodo() {
//   throw new Error('Function not implemented.');
// }

// function updateTodo(todo: any, Todo: typeof Todo) {
//   throw new Error('Function not implemented.');
// }

// function deleteTodo(id: any, number: any) {
//   throw new Error('Function not implemented.');
// }

