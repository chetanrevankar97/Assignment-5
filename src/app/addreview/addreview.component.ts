import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Review} from '../review';
import{FormsModule} from '@angular/forms';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {
  review:string;
  array=[];
  newReview:Review;
  constructor(private svc:DataService) { }

  ngOnInit() {
  }
  createReview2(){
    this.newReview=new Review(this.review);
    this.svc.createReview(this.newReview);
  }

}
