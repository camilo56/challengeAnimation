import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('camiloAnimation', [
        state('normal', style({
          'border-radius': '0px',
          'transform': 'rotateX(0deg)',
        })),
        state('radius', style({
          'border-radius': '50%',
        })),
        state('rote', style({
          'transform': 'rotateX(0deg)',
        })),
        transition('normal => radius', animate('300ms ease-in')),
        transition('normal => rote', animate('1500ms',  keyframes([
          style({transform: 'rotateX(0deg)'}),
          style({transform: 'rotateX(180deg)'}),
          style({transform: 'rotateX(0deg)'})
        ]))),
        transition('normal => crazy', animate('2000ms',  keyframes([
          style({transform: 'rotate(0deg)'}),
          style({transform: 'rotate(180deg)', height:  '60vh'}),
          style({transform: 'rotate(360deg)'}),
          style({transform: 'rotate(540deg)', height:  '80vh'}),
          style({transform: 'rotate(720deg)'}),
          style({transform: 'rotate(900deg)', height:  '90vh'}),
          style({transform: 'rotate(1080deg)'}),
          style({transform: 'rotate(1280deg)', height:  '100vh'}),
          style({transform: 'rotate(1440deg)'}),
        ]))),
        transition('normal => hinge', animate('4000ms ease-in',  keyframes([
          style({
            'transform-origin': 'top left',
            'animation-timing-function': 'ease-in-out'}),
          style({'transform': 'rotate(80deg)',
                  'transform-origin': 'top left',
                  'animation-timing-function': 'ease-in-out'}),
          style({'transform': 'rotate(60deg)',
                  'transform-origin': 'top left',
                  'animation-timing-function': 'ease-in-out',
                  'opacity': 1}),
          style({'transform': 'translate3d(0,700px,0)', 'opacity': 0}),
          style({'transform-origin': 'top left',
                  'animation-timing-function': 'ease-in-out'})
        ]))),
        transition('* => normal', animate('50ms ease-in')),
    ]),
  ]
})

export class AppComponent {
  state = 'normal';

  normalState() {
    this.state = 'normal';
    console.log('normalState: ', this.state);
  }
}
