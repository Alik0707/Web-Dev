import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro 256GB Черный',
      description: 'The iPhone 15 Pro features a titanium design with a 48MP main camera system and the powerful A17 Pro chip. ProMotion display with up to 120Hz refresh rate ensures ultra-smooth visuals. USB-C connectivity and Action Button add versatility to this flagship.',
      price: 699990,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400&h=400&fit=crop',
      images: [
        'https://cdn.new-brz.net/app/public/models/MTP63HX-A/large/w/231108150042337798.webp',
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra 256GB  Black',
      description: 'Samsung\'s most powerful phone features an integrated S Pen, 200MP camera, and the Snapdragon 8 Gen 3 processor.',
      price: 649990,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1707407024280-63b9bb5f7a37?w=400&h=400&fit=crop',
      images: [
        'https://ants.kz/upload/resize_cache/webp/iblock/1d4/jli64qldw3i9t08o9mgr4q33p90rhwt5.webp',
        'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000'
    },
    {
      id: 3,
      name: 'Apple MacBook Air 13" M3 8GB 256GB Midnight',
      description: 'The MacBook Air with M3 chip delivers exceptional performance in an incredibly thin and light design. Up to 18 hours of battery life.',
      price: 599990,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1611186871525-5a228e7c5932?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
    },
    {
      id: 4,
      name: 'Sony PlayStation 5 Slim 1TB White',
      description: 'The PS5 Slim features ultra-high-speed SSD for lightning-fast load times and ray tracing for stunning visuals.',
      price: 299990,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-1tb-geimpad-zarjadnaja-stantsija-power-bank-gripsy-fc24-spider-man-ufc5-mortal-kombat-11-ultimate-118721919/?c=750000000'
    },
    {
      id: 5,
      name: 'Samsung 65" QLED 4K Smart TV QE65Q80C',
      description: 'Experience cinema-quality visuals with Quantum Dot technology delivering a billion shades of color.',
      price: 469990,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1548439528-4e1abae0bb78?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-qe65q7faauxce-165-sm-chernyi-145236490/?c=750000000'
    },
    {
      id: 6,
      name: 'Apple AirPods Pro 2nd Generation with MagSafe',
      description: 'AirPods Pro deliver up to 2x more Active Noise Cancellation than the previous generation.',
      price: 129990,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop',
        'https://images.satu.kz/236696972_w640_h640_apple-airpods-pro.jpg',
        'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
    },
    {
      id: 7,
      name: 'Xiaomi Robot Vacuum Cleaner X10+',
      description: 'The X10+ features 4000Pa suction power and an AI-powered obstacle avoidance system with 3D structured light.',
      price: 189990,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      images: [
        'https://www.pbtech.com/pacific/imgprod/H/O/HOMMIX59071.jpg?h=290045927',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoi5mQbeBUXFEXCj6oxvlYSydw6rvWOVFqA&s',
        'data:image/jpeg;base64,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'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-x10-bhr6068eu-belyi-109460319/?c=750000000'
    }
    
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
