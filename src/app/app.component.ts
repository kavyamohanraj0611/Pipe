import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipe in Angular';
  money=1000;
  todaydate = new Date();
  jsonval = {name:'Kavya', age:'21', address:{a1:'Coimbatore', a2:'Chennai'}};
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
}
