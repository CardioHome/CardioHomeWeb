import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.setTitle('Cardiohome')
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
