import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'ng2-sandbox'
})
@View({
  template:`
    <section role="main">
      <h1>{{ greeting }}, {{ name }}!</h1>
      <label for="name">Your Name:
        <input type="text" [value]="name" (keyup)="setName($event.target.value)"/>
      </label>
    </section>
  `
})
class App {
  greeting:string;
  name:string;

  constructor() {
    this.greeting = 'Hello';
    this.name = 'World';
  }

  setName(name:string) {
    this.name = name;
  }
}

bootstrap(App);
