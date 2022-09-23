import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRouterObj } from '../../common/router.constant';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.css']
})
export class AsideBarComponent implements OnInit {

  public nevigationList = AppRouterObj

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  routeIsActive(routePath: string) {
    return this.router.url == routePath;
  }

}
