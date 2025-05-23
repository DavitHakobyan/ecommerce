import { Product } from './product';

export class CartItem {

  id: string;
  name: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;
// public
  constructor(product: Product) {
    // this.id = product.id;
    // this.name = product.name;
    // this.imageUrl = product.imageUrl;
    // this.unitPrice = product.unitPrice;
    this.id = product.id ?? '';
    this.name = product.name ?? '';
    this.imageUrl = product.imageUrl ?? '';
    this.unitPrice = product.unitPrice ?? 0;
    this.quantity = 1;
  }
}
