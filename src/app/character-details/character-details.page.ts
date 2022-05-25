import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterProps } from '../Character.props';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  character: CharacterProps;



  constructor(private route: ActivatedRoute) {
    this.character = JSON.parse(this.route.snapshot.params['character']);

    
   }

  ngOnInit() {
  }

}
