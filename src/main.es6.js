import {For, Component, Decorator, View, bootstrap} from 'angular2/angular2';
import {EventEmitter, ObservableWrapper} from 'angular2/src/facade/async';

import {TodoService} from './todo-service.es6';
import {TodoTaskComponent} from './todo-task-component.es6';

@Component({
  selector: 'todo-app',
  injectables: [TodoService]
})
@View({
  template: `
    <section role="main">
      <h1>Todos <small>({{ todoService.items.length }})</small></h1>
      <input type="text" #new-todo (keyup) placeholder="Add new todo"/>
      <button (click)="addTodo(newTodo.value)">Add</button>
      <ul>
        <li *for="#item of todoService.items">
          <todo-task [done]="item.done" [text]="item.name" (status-change)="toggleDone(item)"></todo-task>
          <button (click)="removeTodo(item)">x</button>
        </li>
      </ul>
    </section>
  `,
  directives: [For, TodoTaskComponent]
})
class TodoApp {
  todoService:TodoService;

  constructor(todoService:TodoService) {
    this.todoService = todoService;
  }

  addTodo(name:string) {
    this.todoService.addItem(name);
  }

  removeTodo(item:Object) {
    this.todoService.removeItem(item);
  }

  toggleDone(item:Object) {
    item.done = !item.done;
  }
}

bootstrap(TodoApp);
