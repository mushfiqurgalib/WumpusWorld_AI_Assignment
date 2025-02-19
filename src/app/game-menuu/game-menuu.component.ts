import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-menuu',
  templateUrl: './game-menuu.component.html',
  styleUrls: ['./game-menuu.component.css']
})
export class GameMenuuComponent implements OnInit,AfterViewInit {

  constructor(private elementRef: ElementRef,private router: Router) { }
  doSomething():void{
    this.router.navigate(["board"]);
  }
  doSomething1():void{
    this.router.navigate([""]);
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundColor = "#EEA47F";
  }

}
