import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.page.html',
  styleUrls: ['./startpage.page.scss'],
})
export class StartpagePage implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(function(){
                  window.location.href = 'home';
               }, 5000);

  }

}
