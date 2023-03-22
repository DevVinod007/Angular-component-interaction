import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private MessageSource = new BehaviorSubject<string>("Message");

  messageText$ = this.MessageSource.asObservable()

  constructor() { }

  sendMessage(message:string){
    this.MessageSource.next(message)
  }
}
