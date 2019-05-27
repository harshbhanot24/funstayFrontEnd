import { Component, OnInit,Inject,Input } from '@angular/core';
import {trigger,style,animate,state,transition} from '@angular/animations';
import {ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {slide} from './animate';
import { CardService } from '../card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-card',
  templateUrl: './addcard.component.html',
 styleUrls: ['./addcard.component.css'],
  animations:[ trigger('flyInOut', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      style({ transform: 'translateX(-100%)' }),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({ transform: 'translateX(100%)' }))
    ])
  ]),
    trigger('fade-in',[
      // state('void',style({
      //     backgroundColor:'#D3D3D3',opacity:0
      //   })),
      transition(':enter,:leave',[ //bidirectional state change
       animate(1000,style({opacity:0}))
      ]),
      transition('*=>void',[
        animate(1000,style({opacity:0}))
      ])
    ]),
    slide
  ]
})
export class AddcardComponent implements OnInit {
  card:any='';
  card_id:string;
  heading:string;
items: any[] = [];

  addItem(input: HTMLInputElement) {
    if(input.value.length>0)
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
 
   saveCard(){
     let card={
       heading:this.heading ,
       list:this.items
     }
     if(this.route.snapshot.paramMap.get("id")){
        this.service.updateCard(this.route.snapshot.paramMap.get("id"),card).subscribe(
       (data)=>{
            this.router.navigate(['/']);
       },(err)=>{
         console.log(err)
       }

     )
     }
    else  if(this.heading.length>0)
     this.service.addCard(card).subscribe(
       (data)=>{
            this.router.navigate(['/']);
       },(err)=>{
         console.log(err)
       }

     )
   } 
   initAdd(){
         this.card_id=this.route.snapshot.paramMap.get("id");
//fetch data from db

  if(this.card_id && this.card_id.length>0  ){
      this.service.getCard(this.card_id).subscribe(
      (data) => {
        this.card=(data['Data'][0]);
        this.items=this.card['list'];
        this.heading=this.card.heading;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  }

  
  constructor(private route: ActivatedRoute ,private service: CardService,private router:Router) { }

  ngOnInit() {
 this.initAdd();
 }
}