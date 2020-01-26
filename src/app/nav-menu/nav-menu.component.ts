import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.less']
})
export class NavMenuComponent {
  currentTheme: string
  @ViewChild('navbarToggler') navbarToggler:ElementRef;

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  public collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }

  public switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }    
  }

  ngOnInit() {
    this.currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
  }

  ngAfterViewInit() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    toggleSwitch.addEventListener('change', this.switchTheme, false);

    if (this.currentTheme) {
      document.documentElement.setAttribute('data-theme', this.currentTheme);

      if (this.currentTheme === 'dark') {
          toggleSwitch.checked = true;
      }
    }
  }
}
