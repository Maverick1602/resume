import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  scrolled: boolean = false;
  scrollingUp: boolean = false;
  lastScrollTop: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset;
    this.scrolled = offset > 0;
    if (offset > this.lastScrollTop) {
      // Scrolling down
      this.scrollingUp = false;
    } else {
      // Scrolling up
      this.scrollingUp = true;
    }
    this.lastScrollTop = offset <= 0 ? 0 : offset; // For Mobile or negative scrolling
  }

  ngOnInit(): void {
    this.onWindowScroll();
  }
}
