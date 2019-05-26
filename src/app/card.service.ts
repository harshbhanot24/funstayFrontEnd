import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CardService {
 URL = 'https://funstay.herokuapp.com/card';
  constructor(private http: HttpClient) { }

getCards(){
  return this.http.get(this.URL);
}
getCard(id){
  return this.http.get(this.URL+'/'+id);
}
updateCard(id,card){
  return this.http.put(this.URL+'/'+id,card);
}
addCard(card){
  return this.http.post(this.URL,card);
}
deleteCard(id){
  return this.http.delete(this.URL+'/'+id);
}
}