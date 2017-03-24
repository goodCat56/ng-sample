import { Component, OnInit } from '@angular/core';
import {FakeService} from "../../../../services/fake.service";

@Component({
  selector: 'app-manufactures-page',
  templateUrl: './manufactures-page.component.html',
  styleUrls: ['./manufactures-page.component.css']
})
export class ManufacturesPageComponent implements OnInit {

  posts:any[];

  constructor(private fakeService:FakeService) { }

  //This hook will be called once the component is created.
  // (Google the 'angular hooks' to learn when is the best time to call a function.)
  ngOnInit() {
    //load the data on init.
    this.loadPosts();
  }

  loadPosts(){
    this.fakeService.getPosts().subscribe(data=>{
      //Your logic to render the html.

      //Just like that. (of course do the heard edge checks)
      this.posts = data;

    },error=>console.log('error in loading the posts'));
  }

}
