import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/user', title: 'Who am I',  icon:'pe-7s-user', class: '' },
    { path: '/table', title: 'Experience',  icon:'pe-7s-note2', class: '' },
    { path: '/typography', title: 'Education',  icon:'pe-7s-news-paper', class: '' },
    { path: '/icons', title: 'Skills',  icon:'pe-7s-science', class: '' },
    { path: '/maps', title: 'Live',  icon:'pe-7s-map-marker', class: '' },
    { path: '/notifications', title: 'Recommendations',  icon:'pe-7s-bell', class: '' },
    { path: '/dashboard', title: 'Data',  icon: 'pe-7s-graph', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
