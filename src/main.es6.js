import {Decorator, Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: '[event-test-component]',
  hostListeners: {
    'click': 'onClick($event)',
    'window:resize': 'onResize($event)'
  }
})
@View({
  template: `
    <h1>Your Window Size</h1>
    <div>{{windowSize}}</div>
  `
})
class EventTestComponent {
  windowSize:number = 0;

  onResize() {
    this.windowSize = window.innerWidth;
  }

  onClick(event) {
    window.alert(`You clicked me at ${event.clientX},${event.clientY}!`);
  }
}

@Component({
  selector: 'ng2-sandbox',
  hostListeners: {
    'window:resize': 'onResize($event)'
  }
})
@View({
  template: `
    <div event-test-component></div>
  `,
  directives: [EventTestComponent]
})
class App {}

bootstrap(App);
