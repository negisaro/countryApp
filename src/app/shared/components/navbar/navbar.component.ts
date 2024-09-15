import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

}
