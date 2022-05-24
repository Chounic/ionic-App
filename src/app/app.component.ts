import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Sign In', url: '/sign-in', icon: 'mail' },
    { title: 'Master list', url: '/master-list', icon: 'paper-plane' },
    { title: 'Favorites', icon: 'heart' },
    { title: 'Archived', icon: 'archive' },
    { title: 'Trash', icon: 'trash' },
    { title: 'Spam', icon: 'warning' },
  ];
  
  constructor(private menuCtrl: MenuController) {}


  closeMenu(url: string) {
    this.menuCtrl.close();
    url === '/sign-in' && this.menuCtrl.enable(false)
  }
}
