import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../common/product';
import {ProductService} from '../../services/product.service';


@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })
  }

  handleProductDetails() {
    // get the "id" param string. convert string to a number using the "+" symbol
    // const theProductId: number = +this.route.snapshot.paramMap.get('id');
    const idParam = this.route.snapshot.paramMap.get('id');
    const theProductId: number = idParam ? +idParam : 0;

    this.productService.getProduct(theProductId).subscribe(
      data => {
        this.product = data;
      })
  }

}
