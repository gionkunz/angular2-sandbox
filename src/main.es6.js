import {Component, Viewport, ViewContainer, View, bootstrap} from 'angular2/angular2';

@Viewport({
  selector: '[unless]',
  properties: {
    unless: 'unless'
  }
})
class Unless {
  viewContainer:ViewContainer;
  prevCondition:boolean;

  constructor(viewContainer:ViewContainer) {
    this.viewContainer = viewContainer;
    this.prevCondition = true;
  }

  set unless(newCondition) {
    if (newCondition && !this.prevCondition) {
      this.prevCondition = true;
      this.viewContainer.clear();
    } else if (!newCondition && this.prevCondition) {
      this.prevCondition = false;
      this.viewContainer.create();
    }
  }
}

@Component({
  selector: 'ng2-sandbox'
})
@View({
  template: `
    <section role="main">
      <h1>Viewport Directive Test</h1>
      <p>I'll only show the following content, if this
          <input type="checkbox" #show (click)/> is NOT checked</p>
      <div *unless="show.checked">
        Hello there!
      </div>
    </section>
  `,
  directives: [Unless]
})
class App {}

bootstrap(App);
