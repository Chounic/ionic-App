import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuController, NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterProps } from '../Character.props';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.page.html',
  styleUrls: ['./master-list.page.scss'],
})
export class MasterListPage implements OnInit {
  characters: Observable<any>;

  constructor(
    private router: Router,
    public httpClient: HttpClient
  ) {
    this.characters = this.httpClient.get(
      'https://rickandmortyapi.com/api/character'
    );
    }
    
    openDetails(character: CharacterProps) {
      this.router.navigate([
        '/character-details',
        { character: JSON.stringify(character) },
      ]);
    }

    startsWithVowel(word: string){
      const vowels = ("aeiouAEIOU"); 
      return vowels.indexOf(word[0]) !== -1;
   }
    
    ngOnInit() {}
    
    
  }
