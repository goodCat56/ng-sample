import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Header} from 'app/header/header';

@Component({
  selector: 'main'
})

@View({
  directives: [Header],
  template: `
    <header></header>
  `
})

class Main {
}

bootstrap(Main);
