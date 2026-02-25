import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  private products: Product[] = [
    // Smartphones (categoryId: 1)
    {
      id: 1, categoryId: 1, likes: 0,
      name: 'Apple iPhone 15 Pro 256GB ',
      description: 'The iPhone 15 Pro features a titanium design with a 48MP main camera system and the powerful A17 Pro chip. ProMotion display with up to 120Hz refresh rate. USB-C and Action Button add versatility.',
      price: 699990, rating: 4.9,
      image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400&h=400&fit=crop',
      images: [
        'https://cdn.new-brz.net/app/public/models/MTP63HX-A/large/w/231108150042337798.webp',
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000'
    },
    
    
    
    // Laptops (categoryId: 2)
    {
      id: 6, categoryId: 2, likes: 0,
      name: 'Apple MacBook Air 13" M3 8GB 256GB Midnight',
      description: 'MacBook Air with M3 chip delivers exceptional performance in an incredibly thin and light design. Up to 18 hours of battery life with fanless operation and 13.6-inch Liquid Retina display.',
      price: 599990, rating: 4.9,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1611186871525-5a228e7c5932?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop'
      ],
      
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
    },
    
    
    
    
    // Headphones (categoryId: 3)
    {
      id: 11, categoryId: 3, likes: 0,
      name: 'Apple AirPods Pro 2nd Generation with MagSafe',
      description: 'AirPods Pro deliver up to 2x more Active Noise Cancellation. H2 chip enables Adaptive Audio that seamlessly blends ANC and Transparency mode. Spatial Audio with dynamic head tracking.',
      price: 129990, rating: 4.8,
      image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop',
        'https://images.satu.kz/236696972_w640_h640_apple-airpods-pro.jpg',
        'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
    },
    
    
    
    // Tablets (categoryId: 4)
    {
      id: 16, categoryId: 4, likes: 0,
      name: 'Apple iPad Pro 12.9" M2 WiFi 256GB Space Grey',
      description: 'iPad Pro with M2 chip and Liquid Retina XDR display is the ultimate iPad experience. Apple Pencil hover, ProRes video recording, and Wi-Fi 6E connectivity for blazing fast wireless speeds.',
      price: 699990, rating: 4.9,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-wi-fi-12-9-djuim-8-gb-128-gb-seryi-107277956/?c=750000000'
    }
    
    
    
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId).map(p => ({ ...p }));
  }
}
