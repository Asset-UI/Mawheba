import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/productservice';
import {Product} from '../../core/product';

@Component({
  selector: 'app-general-view',
  templateUrl: './general-view.component.html',
  styleUrls: ['./general-view.component.css']
})
export class GeneralViewComponent implements OnInit {
  products!: Product[];
  value: number = 0;
	responsiveOptions: any;
  data!: any;
  options: any;

	constructor(private productService: ProductService) { 
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
        this.data = {
          labels: ['الابتكار', 'الحضور', 'التطور', 'السلوك', 'الالتزام'],
          datasets: [
              {
                  // label: '',
                  backgroundColor: '#9BD7FF',
                  borderColor: '#9BD7FF',
                  pointBackgroundColor: '#9BD7FF',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: '#9BD7FF',
                  data: [85, 79, 110, 101, 76]
              },
              {
                  // label: '',
                  backgroundColor: '#9D8EFF',
                  borderColor: '#9D8EFF',
                  pointBackgroundColor: '#9D8EFF',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: '#9D8EFF',
                  data: [95, 89, 120, 111, 86]
              }
          ],
      };
      this.options = {
        reverse : true,
        legend: {
            lineWidth: 100,
            fontColor: '#fff',
            scaleShowGridLines : false,
            display: false,
            defaultFontSize: 16,
        },
        labels: {
          defaultFontSize: 16,
        },

    };
      
	}

	ngOnInit() {
		this.productService.getProductsSmall().then(products => {
			this.products = products;
		});
    }
}

