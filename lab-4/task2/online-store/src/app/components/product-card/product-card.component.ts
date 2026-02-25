import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  activeImageIndex: number = 0;
  showGallery: boolean = false;

  ngOnInit(): void {}

  get stars(): { filled: boolean }[] {
    return Array.from({ length: 5 }, (_, i) => ({
      filled: i < Math.round(this.product.rating)
    }));
  }

  setActiveImage(index: number): void {
    this.activeImageIndex = index;
  }

  nextImage(): void {
    this.activeImageIndex = (this.activeImageIndex + 1) % this.product.images.length;
  }

  prevImage(): void {
    this.activeImageIndex =
      (this.activeImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }

  toggleGallery(event: MouseEvent): void {
    event.preventDefault();
    this.showGallery = !this.showGallery;
  }

  closeGallery(): void {
    this.showGallery = false;
  }

  shareOnWhatsApp(): void {
    const text = encodeURIComponent(`Check out this product: ${this.product.name} - ${this.product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareOnTelegram(): void {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  formatPrice(price: number): string {
    return price.toLocaleString('ru-RU') + ' ₸';
  }
}
