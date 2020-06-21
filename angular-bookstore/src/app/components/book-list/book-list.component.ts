import { Component, OnInit } from '@angular/core';
import { Book } from '../../common/book';
import { BookService } from 'src/app/services/book.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books : Book[];
  // books : Book[] = [
  //   {
  //     sku: "text-100",
  //     name: "Python for SAS Users",
  //     description: "Business users familiar with Base SAS programming can now learn Python by example. You will learn via examples that map SAS programming constructs and coding patterns into their Python equivalents.",
  //     unitPrice: 600,
  //     imageUrl: "assets/images/webdevelopment/text-100.jpg",
  //     active: true,
  //     unitsInStock: 100,
  //     createdOn: new Date(),
  //     updatedOn: null,
  //   },
  //   {
  //     sku: "text-101",
  //     name: "Deep Learning with JavaScript",
  //     description: "Deep learning has transformed the fields of computer vision, image processing, and natural language applications.",
  //     unitPrice: 500,
  //     imageUrl: "assets/images/webdevelopment/text-101.jpg",
  //     active: true,
  //     unitsInStock: 100,
  //     createdOn: new Date(),
  //     updatedOn: null,
  //   },
  //   {
  //     sku: "text-102",
  //     name: "Clean Ruby",
  //     description: "Learn how to make better decisions and write cleaner Ruby code. This book shows you how to avoid messy code that is hard to test",
  //     unitPrice: 700,
  //     imageUrl: "assets/images/webdevelopment/text-102.jpg",
  //     active: true,
  //     unitsInStock: 100,
  //     createdOn: new Date(),
  //     updatedOn: null,
  //   }

  // ]

  constructor(private _bookService : BookService ) { }

  ngOnInit() {
    this.listBooks();
  }

  listBooks(){
this._bookService.getBooks().subscribe(
  data => this.books =data
  // data =>{
  //   console.log(data);
  // }
)

  }

}
