import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  share(){
    window.alert('test share!');
  }

  onNotify(){
    window.alert('you will have a notify');
  }


}
