import {Component, View, bootstrap} from 'angular2/angular2';

class App {
  constructor() {
    this.greeting = 'Hello';
    this.name = 'World';
  }

  setName(name) {
    this.name = name;
  }
}

App.annotations = [
  new Component({
    selector: 'ng2-sandbox'
  }),
  new View({
    template:`
      <section role="main">
        <h1>{{ greeting }}, {{ name }}!</h1>
        <label for="name">Your Name:
          <input type="text" [value]="name" (keyup)="setName($event.target.value)"/>
        </label>
      </section>
    `
  })
];

bootstrap(App);
