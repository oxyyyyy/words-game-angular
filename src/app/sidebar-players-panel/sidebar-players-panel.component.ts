import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Player } from '../players';
import { team1Players } from '../mock-team';
import { team2Players } from '../mock-team';

@Component({
  selector: 'app-sidebar-players-panel',
  templateUrl: './sidebar-players-panel.component.html',
  styleUrls: ['./sidebar-players-panel.component.css']
})
export class SidebarPlayersPanelComponent implements OnInit {

  team1Players = team1Players;
  team2Players = team2Players;

  // constructor(private route: ActivatedRoute) { 
  //   this.route.params.subscribe(res => console.log(res.id))
  //  }

  ngOnInit() {
  }

}
