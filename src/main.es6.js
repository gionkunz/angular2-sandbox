import {Component, View, bootstrap} from 'angular2/angular2';
import {Inject, bind} from 'angular2/di';

class Greeter {
  greet() {
    throw new Error('Abstract method!');
  }
}

class FriendlyGreeter extends Greeter {
  greet() {
    return 'Hi there my friend!';
  }
}

class RudeGreeter extends Greeter {
  greet() {
    return 'Hey you bastard!';
  }
}

class GreetingService {
  greeter;

  constructor(@Inject(Greeter) greeter:Greeter) {
    this.greeter = greeter;
  }

  getGreeting() {
    return this.greeter.greet();
  }
}

@Component({
  selector: 'ng2-sandbox',
  injectables: [
    bind(Greeter).toClass(FriendlyGreeter),
    GreetingService
  ]
})
@View({
  template: `
    <section role="main">
      <h1>Dependency Injection Example</h1>
      <p>Values: {{greetingService.getGreeting()}}</p>
    </section>
  `
})
class App {
  greetingService:GreetingService;

  constructor(@Inject(GreetingService) greetingService:GreetingService) {
    this.greetingService = greetingService;
  }
}

bootstrap(App);
