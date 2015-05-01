import {Component, View, bootstrap} from 'angular2/angular2';
import {Inject, InjectPromise, bind} from 'angular2/di';
import {Promise, PromiseWrapper} from 'angular2/src/facade/async';

class ValueStore {
  values:Array<number>;

  constructor() {
    this.values = [1, 2, 3, 4];
    console.log('ValueStore is constructed');
  }

  static createValueStoreAsync() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(new ValueStore());
      }, 5000);
    });
  }
}

class ValueService {
  valueStore:Promise<ValueStore>;

  constructor(@InjectPromise(ValueStore) valueStore:Promise<ValueStore>) {
    this.valueStore = valueStore;
    console.log('ValueService is constructed with Promise of ValueStore');
  }

  getReversedValues() {
    return this.valueStore.then(function(valueStore) {
      return valueStore.values.reverse();
    });
  }
}

@Component({
  selector: 'ng2-sandbox',
  injectables: [
    ValueService,
    bind(ValueStore).toAsyncFactory(ValueStore.createValueStoreAsync)
  ]
})
@View({
  template: `
    <section role="main">
      <h1>Dependency Injection Example</h1>
      <p>Values: {{reversedValues}}</p>
    </section>
  `
})
class App {
  valueService:ValueService;
  reversedValues;

  constructor(@Inject(ValueService) valueService:ValueService) {
    this.valueService = valueService;

    valueService.getReversedValues().then((reversedValues) => this.reversedValues = reversedValues);
  }
}

bootstrap(App);
