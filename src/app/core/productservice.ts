import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable()
export class ProductService {

 
    productNames: string[] = [
        "FirstSlide", 
        "SecondSlide", 
        "ThirdSlide", 
        "FourthSlide", 
        "FifthSlide", 
        "sixthSlide", 
    ];
    productDescriptions: string[] = [
        "Bamboo Watch", 
        "Black Watch", 
        "Blue Band", 
    ];
 
    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('assets/products-small.json')
        .toPromise()
        .then(res => <Product[]>res.data)
        .then(data => { return data; });
    }

    getProducts() {
        return this.http.get<any>('assets/products.json')
        .toPromise()
        .then(res => <Product[]>res.data)
        .then(data => { return data; });
    }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/products-orders-small.json')
        .toPromise()
        .then(res => <Product[]>res.data)
        .then(data => { return data; });
    }

    generatePrduct(): Product {
        const product: Product =  {
            id: this.generateId(),
            name: this.generateName(),
            description: this.generateDescription(),
        };

        product.image = product?.name?.toLocaleLowerCase().split(/[ ,]+/).join('-')+".jpg";;
        return product;
    }

    generateId() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        
        return text;
    }

    generateName() {
        return this.productNames[Math.floor(Math.random() * Math.floor(30))];
    }
    generateDescription() {
        return this.productDescriptions[Math.floor(Math.random() * Math.floor(30))];
    }
}