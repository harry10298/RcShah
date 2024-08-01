import { MatIconModule } from '@angular/material/icon';
import { Component, Output, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, CarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'RCShah';
  isMenuOpen: boolean = false;
  // simpleModal!: ElementRef;

  @ViewChild('simpleModal') simpleModal!: ElementRef;
  @Output() closed = new EventEmitter<void>();

  closePopup() {
    this.closed.emit();
    this.simpleModal.nativeElement.style.display = 'none'; // Hide the modal
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
