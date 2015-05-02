import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  template: `
    <div>
      <h1>Hello {{ name }}!</h1>
    </div>
  `
})
class App {
  name:string;

  constructor() {
    this.name = 'World';
  }
}

bootstrap(App);
