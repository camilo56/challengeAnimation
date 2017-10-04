import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('camiloAnimation', [
      state('normal', style({
        'opacity': '1',
        })),
      state('radius', style({
        'border-radius': '50%',
      })),
      state('rote', style({
        'transform': 'rotateX(0deg)',
      })),
      transition('normal => radius', animate('1s ease-in')),
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
      transition('normal => hinge', animate('2000ms ease-in',  keyframes([
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
      transition('normal => bye', animate('1s ease-in', style({ opacity: 0 }))),
      transition('* => normal', animate('50ms ease-in')),
    ]),
    trigger('opacity', [
      transition('* => opOne',
        [
          query('.opacity',
            stagger('800ms', animate(900, style({ opacity: 0 })))
          ),
        ]
      ),
    ]),
  ]
})

export class AppComponent {
  state = 'normal';
  stateOne: string;

  normalState() {
    this.state = 'normal';
  }

  doOpacity() {
    console.log('doOpacity');
    this.stateOne = 'opOne';
  }

}
