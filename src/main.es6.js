import {Component, View, bootstrap} from 'angular2/angular2';
import {Inject} from 'angular2/di';

class ValueStore {
  values:Array<number>;

  constructor() {
    this.values = [1, 2, 3, 4];
  }
}

class ValueService {
  valueStore:ValueStore;

  constructor(@Inject(ValueStore) valueStore:ValueStore) {
    this.valueStore = valueStore;
  }

  getReversedValues() {
    return this.valueStore.values.reverse();
  }
}

@Component({
  selector: 'ng2-sandbox',
  injectables: [ValueService, ValueStore]
})
@View({
  template: `
    <section role="main">
      <h1>Dependency Injection Example</h1>
      <p>Values: {{valueService.getReversedValues()}}</p>
    </section>
  `
})
class App {
  valueService:ValueService;

  constructor(@Inject(ValueService) valueService:ValueService) {
    this.valueService = valueService;
  }
}

bootstrap(App);
