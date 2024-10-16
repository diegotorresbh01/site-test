import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site-test';

  public onClick(): void {
    const token = sessionStorage.getItem('token');
    console.log('token', token);

    const targetUrl = "https://totvssign.dev.totvs.app/webapptotvssign/cloud-signature/search";
    const popupOptions = 'width=500,height=400,top=100,left=100';
    const newWindow = window.open(targetUrl, '_blank', popupOptions);
    
    const dataToSend = JSON.stringify(token);
    if (newWindow) {
      setTimeout(() => {
        newWindow.postMessage(dataToSend, targetUrl);
      }, 2000);
    }
  }
}
