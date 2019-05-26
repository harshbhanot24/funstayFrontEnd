import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {trigger,style,animate,state,transition} from '@angular/animations';
import {slide} from '../addcard/animate';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations:[
    trigger('flyInOut', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      style({ transform: 'translateX(-100%)' }),
      animate(1000)
    ]),
    transition('* => void', [
      animate(1000, style({ transform: 'translateX(100%)' }))
    ])
  ]),
    trigger('fade-in',[
      state('void',style({
          backgroundColor:'#D3D3D3',opacity:0
        })),
      transition('void <=> *',[ //bidirectional state change
       animate(1000)
      ]),
      transition('*=>void',[
        animate(1000,style({opacity:0}))
      ])
    ]),
    slide
  ]
})
export class CardComponent implements OnInit {
  @Input('card') card;
      @Output() delete = new EventEmitter();
      deleteCard(id) { 
        this.delete.emit(id);
    }
  constructor() { }

  ngOnInit() {
  }

}