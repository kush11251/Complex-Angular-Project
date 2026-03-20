import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  template: '<h1>Home Component</h1>'
})
export class HomeComponent {
  constructor(private dataService: DataService) {}
}