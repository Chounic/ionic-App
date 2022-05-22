import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
 

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.page.html',
  styleUrls: ['./master-list.page.scss'],
})
export class MasterListPage implements OnInit {

  characters: Observable<any>;

  constructor(private router: Router, private route: ActivatedRoute, public httpClient: HttpClient) { 
    this.characters = this.httpClient.get('https://rickandmortyapi.com/api/character');

  }

  openDetails(character: any) {
    this.router.navigate(['/character-details', {character: JSON.stringify(character)}])
  }

  ngOnInit() {
  }

}
