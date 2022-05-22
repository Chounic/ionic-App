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
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  
  constructor(private menuCtrl: MenuController) {}


  closeMenu(url: string) {
    this.menuCtrl.close();
    url === '/sign-in' && this.menuCtrl.enable(false)
  }
}
