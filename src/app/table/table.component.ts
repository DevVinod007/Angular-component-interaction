import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  posts:any

  constructor(private Api:ApiService) { }

  ngOnInit(): void {
    this.Api.getApi().subscribe((data)=>{
      console.log(data)
    this.posts = data
    })
    console.log(this.posts)
  }

}
