import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
  PopStateEvent,
} from '@angular/common';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
// import PerfectScrollbar from 'perfect-scrollbar';
import * as $ from "jquery";
import { filter, Subscription } from 'rxjs';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})

export class LayoutComponent {}