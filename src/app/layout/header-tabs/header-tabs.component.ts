import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-tabs',
  templateUrl: './header-tabs.component.html',
  styleUrls: ['./header-tabs.component.css']
})
export class HeaderTabsComponent implements OnInit {
  activeIndex: number = 0;
  public shouldShow:boolean = true;
  items!: MenuItem[];
  constructor() { };
  activeItem!: MenuItem;
  
  ngOnInit(): void {
    this.items = [
      {
        label: 'نظرة عامة',
        icon: 'SIcomoon icon-Fill-1184',
        styleClass: 'active',
        routerLink: ['../GVC'],
        routerLinkActiveOptions: {
          exact: false,
        }
      },
      {
        label: 'البرامج',
        icon: 'SIcomoon icon-Fill-1004',
        styleClass: 'active',
        routerLink: ['/'],
        routerLinkActiveOptions: {
          exact: true,
        }      },
      {
        label: 'المسابقات',
        icon: 'SIcomoon icon-Fill-978',
        styleClass: 'active',
        routerLink: ['/'],
        routerLinkActiveOptions: {
          exact: true,
        }
      },
      {
        label: 'استفسارتى',
        icon: 'SIcomoon icon-Fill-978',
        styleClass: 'active',
        routerLink: ['/'],
        routerLinkActiveOptions: {
          exact: true,
        }
      }
    ];
  }
}
