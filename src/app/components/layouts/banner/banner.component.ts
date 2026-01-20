import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  @ViewChild('carouselElement', { static: true })
  carouselElement!: ElementRef<any>;
  images = [
    '../../assets/img/banh-tet.jpg',
    '../../assets/img/dua-sap.jpg',
    '../../assets/img/banh-u.jpg',
    '../../assets/img/banh-tet-com-dep.jpg',
    '../../assets/img/cu-cai-muoi.jpg',
    ];
  ngOnInit(): void {}
}
