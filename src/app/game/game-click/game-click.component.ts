import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-click',
  templateUrl: './game-click.component.html',
  styleUrls: ['./game-click.component.sass']
})
export class GameClickComponent implements OnInit {

  @Output() onClick = new EventEmitter();

  click(){
    this.onClick.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
