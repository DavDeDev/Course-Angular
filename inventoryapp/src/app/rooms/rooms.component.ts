import { Component } from '@angular/core';

@Component({
  selector: 'inventory-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = 'The Grand Hotel';
  numberOfRooms = 100;

  hideRooms = false;

  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
