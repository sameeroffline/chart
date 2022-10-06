import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()

  url: string ="https://www.youtube.com/embed/k5E2AVpwsko?autoplay=1";
  url1: string="https://www.youtube.com/embed/3dHNOWTI7H8?autoplay=1";
  url2: string="https://www.youtube.com/embed/gNHgaUVoT4Y?autoplay=1";
  url3: string="https://www.youtube.com/embed/iZ1mlcCkY8A?autoplay=1";
  url4: string="https://www.youtube.com/embed/tpMMi8g9DU8?autoplay=1";
  url5: string="https://www.youtube.com/embed/7c3-Gei5j4w?autoplay=1";
  url6: string="https://www.youtube.com/embed/Idg55ZJtcjU?autoplay=1";
  urlSafe: SafeResourceUrl | undefined;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    
  }

  playvideo(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  playvideo1(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url1);
  }
  playvideo2(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);
  }
  playvideo3(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url3);
  }
  playvideo4(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url4);
  }
  playvideo5(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url5);
  }
  playvideo6(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url6);
  }


}
