import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {

  public today : Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
