import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()  data! : string
  @Output() childData = new EventEmitter<string>()
  message:string = "Message for the parent for using viewChild"
  data2:string =""
  constructor(private dataService:DataserviceService) { }

  ngOnInit(): void {
    this.dataService.messageText$.subscribe((data) =>{
      console.log("data Usinf service",data)
    }
    )
  }

  onClick(){
    this.childData.emit(this.message)
  }



}
