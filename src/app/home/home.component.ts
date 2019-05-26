import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards;
  constructor(private service: CardService) { }

  ngOnInit() {
    this.service.getCards().subscribe(
      (data: Response) => {
        this.cards = data['Data'];
        console.log(this.cards);
      }
    )
  }
  deleteCard(id) {
    this.cards = this.cards.filter(function (value, index, arr) {
      return value['_id'] != id;
    });
    this.service.deleteCard(id).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }//deletion done

}