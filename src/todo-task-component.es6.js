import {Component, View, PropertySetter} from 'angular2/angular2';
import {EventEmitter} from 'angular2/src/facade/async';

@Component({
  selector: 'todo-task',
  properties: {
    done: 'done',
    text: 'text'
  },
  events: ['statusChange']
})
@View({
  template: `
    <span (click)="changeStatus()">{{ text }}</span>
  `
})
export class TodoTaskComponent {
  _done:boolean;
  text:string;
  statusChange:EventEmitter;
  textChange:EventEmitter;
  textDecorationSetter:Function;

  constructor(@PropertySetter('style.text-decoration') textDecorationSetter) {
    this.statusChange = new EventEmitter();
    this.textChange = new EventEmitter();
    this.textDecorationSetter = textDecorationSetter;
  }

  changeStatus() {
    this.statusChange.next(!this._done);
  }

  set done(done) {
    this._done = done;
    this.textDecorationSetter(done ? 'line-through' : '');
  }

  get done() {
    return this._done;
  }
}
