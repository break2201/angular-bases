import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: 'counter.component.html'
})
export class CounterComponent {

  public counter: number = 10;

  increaseBy( value: string ): void {

    if(value == '+') {
      this.counter += 1;
    } else {
      this.counter -= 1;
    }

  }

  reset() {

    this.counter = 10;

  }

}