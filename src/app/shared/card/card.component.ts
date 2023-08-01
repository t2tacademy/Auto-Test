import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() answer: string; // Input to pass card data to the component
  @Input() i: number; // Input to pass card data to the component
  @Input() isCardClicked: boolean;

  ngOnInit(): void {
  }

  toggleCardColor() {
    this.isCardClicked = !this.isCardClicked;
  }
  toRoman(n: number): string {
    switch (n) {
      case 0:
        return 'i.';
      case 1:
        return 'ii.';
      case 2:
        return 'iii.';
      case 3:
        return 'iv.';
      case 4:
        return 'v.';
      case 5:
        return 'vi.';
    }
    if (n === 0) {
      return 'i.';
    }
  }

}
