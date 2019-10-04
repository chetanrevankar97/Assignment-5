import { Injectable } from '@angular/core';
import {Book} from './book';
import {Review} from './review';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  array=[];
  books:Book[]=[];

  reviews:Review[]=[];
  constructor() { }

  create(b:Book)
  {
    this.books.push(b);
  }
  createReview(r:Review){
    this.reviews.push(r);
    this.array.push(this.reviews);
  }
}
