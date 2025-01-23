import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../Models/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  public currentIndex: number = 0;
  public intervalId: any = null;
  public isPlaying: boolean = false;
  data: Data;

  constructor() {
    this.data = new Data([
      'https://picsum.photos/800/400?random=1',
      'https://picsum.photos/800/400?random=2',
      'https://picsum.photos/800/400?random=3'
    ]);
  }

  getCurrentImage(): string {
    return this.data.img[this.currentIndex];
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.data.img.length;
  }

  previous(): void {
    this.currentIndex = (this.currentIndex - 1 + this.data.img.length) % this.data.img.length;
  }

  play(): void {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.intervalId = setInterval(() => {
        this.next();
      }, 1000);
    }
  }

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.isPlaying = false;
    }
  }


}


