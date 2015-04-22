import {Injectable} from 'angular2/di';

@Injectable()
export class TodoService {
  items:Array;

  constructor() {
    this.items = [{
      name: 'Item 1',
      done: false
    }, {
      name: 'Item 2',
      done: true
    }]
  }

  addItem(name:string) {
    this.items.push({
      name: name,
      done: false
    });
  }

  removeItem(item:Object) {
    var index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
