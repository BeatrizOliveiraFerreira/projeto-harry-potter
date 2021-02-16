import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  casa1: string = 'Corvinal'
  casa2: string = 'Grifinória'
  casa3: string = 'Lufa-Lufa'
  casa4: string = 'Sonserina'
}
