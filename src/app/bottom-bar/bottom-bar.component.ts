import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {
  dateToday = this.datepipe.transform(new Date(), 'dd/MM/yyyy');
  timeToday = this.datepipe.transform(new Date(), 'HH:mm');
  constructor(public datepipe: DatePipe){}

  ngOnInit(): void {
    setInterval(() => {
        this.dateToday = this.datepipe.transform(new Date(), 'dd/MM/yyyy');
        this.timeToday = this.datepipe.transform(new Date(), 'HH:mm');
      }, 1000
    );
  }

}
