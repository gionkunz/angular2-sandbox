import {Component, View, bootstrap} from 'angular2/angular2';
import {Inject, InjectLazy} from 'angular2/di';

class ValueStore {
  values:Array<number>;

  constructor() {
    this.values = [1, 2, 3, 4];
    console.log('Value store was constructed');
  }
}

class ValueService {
  valueStore:ValueStore;

  constructor(@InjectLazy(ValueStore) valueStoreFactory:Function) {
    console.log('Calling value store lazy factory');
    this.valueStore = valueStoreFactory();
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
      <h1>Lazy Dependency Injection Example</h1>
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
