import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  constructor(private router: Router) {}

  title = 'app';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  private swipeCoord ?: [number, number];
  private swipeTime ?: number;

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000 //
        && Math.abs(direction[0]) > 30 // Long enough
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
          const swipe = direction[0] < 0 ? 'next' : 'previous';
          switch (this.router.url) {
            case '/':
              swipe === 'next' ? this.router.navigateByUrl('/portfolio') : null
              break
            case '/portfolio':
              swipe === 'next' ? this.router.navigateByUrl('/resume') : this.router.navigateByUrl('/')
              break
            case '/resume':
              swipe === 'next' ? null : this.router.navigateByUrl('/portfolio')
              break
          }
          
      }
    }
  }
}
