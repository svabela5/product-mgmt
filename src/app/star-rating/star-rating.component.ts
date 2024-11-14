import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent implements OnChanges {
  
  @Input()
  productRating: number = 3;

  starWidth: number = 38;

  @Output()
  notify: EventEmitter<string> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = 24 * this.productRating;
  }

  onClick(){
    this.notify.emit("Rating of " + this.productRating + " was clicked")
  }
}
