import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-task';
  isSubmitted: boolean = false;
  firstInput: string = '';
  secondInput: string = '';
  thirdInput: string = '';
  fourthInput: string = '';
  fifthInput: string = '';

  clickNext(event: any): void {
    this.isSubmitted = true;
  }
}
