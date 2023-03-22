import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {
  data:string = "hello a Message to the child"
  childData!:string
  @ViewChild(ChildComponent)child!: ChildComponent;
  message : string = ""
  constructor(private dataService:DataserviceService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
   console.log( this.child.message);
  }

  childDataRecieved($event:string){
   this.childData = $event
  }


  onClick(){
   this.dataService.sendMessage("Message via Service")
  }
}
