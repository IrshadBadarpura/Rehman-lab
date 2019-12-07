declare var initViz: any;
declare var initViz1: any;
declare var initViz3: any;
declare var initViz4: any;
import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-ribo',
  templateUrl: './ribo.component.html',
  styleUrls: ['./ribo.component.css']
})
export class RiboComponent implements OnInit, AfterViewInit {
  constructor() {}
  public isCollapsedCheck = true;
  public isOpenCheck = true;
  public isCollapsedC = true;
  public isOpenC = true;
  public isCollapsed = true;
  public isOpen = true;
  public CollapseBtn = false;
  public CheckedBtn = false;
  public CollapseBool = true;
  public CheckedBool = true;
  public openCollapse = 'Open';
  public openCheck = 'Open';
  ngOnInit() {
  }
  ngAfterViewInit() {
    initViz();
    initViz1();
    initViz3();
    initViz4();
    }
  public itsCollapsed() {
    if (this.CollapseBtn) {
      this.CollapseBtn = false;
      this.CheckedBtn = false;
      this.CollapseBool = true;
      this.CheckedBool = true;
      this.openCollapse = 'Open';
      this.openCheck = 'Open';
    } else {
      this.CollapseBtn = true;
      this.CheckedBtn = false;
      this.CollapseBool = true;
      this.CheckedBool = false;
      this.openCollapse = 'Close';
    }
    return this.isCollapsedCheck = !this.isCollapsedCheck;
  }
  public itsChecked() {
    if (this.CheckedBtn) {
      this.CollapseBtn = false;
      this.CheckedBtn = false;
      this.CollapseBool = true;
      this.CheckedBool = true;
      this.openCollapse = 'Open';
      this.openCheck = 'Open';
    } else {
      this.CollapseBtn = false;
      this.CheckedBtn = true;
      this.CollapseBool = false;
      this.CheckedBool = true;
      this.openCheck = 'Close';
    }
    return this.isOpenCheck = !this.isOpenCheck;
  }

}
