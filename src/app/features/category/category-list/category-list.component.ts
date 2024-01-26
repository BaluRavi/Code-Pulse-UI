import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category-model';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories$?: Observable<Category[]>;

  constructor(private categoryService: CategoryService, private spinnerService: NgxSpinnerService) {

  }

  ngOnInit(): void {

    this.spinnerService.show();
    this.categories$ = this.categoryService.getAllCategories();
    this.spinnerService.hide();
  }
}
