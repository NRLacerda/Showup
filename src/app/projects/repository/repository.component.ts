import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent {
  posts: any[];

  constructor(private http:HttpClient){
    this.posts=[];
  }
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.posts = data;
    });
  }

}
