import {trigger,style,animate,state,transition,animateChild,query,group} from '@angular/animations';
export let slide=trigger(
  'slide',[transition(
    ':enter',[
      style({transform:'translateX(-10px)' }),animate(1000)
    ]

  ),
  transition(
    ':leave',[
      animate('2s Ease-in', style({ transform:'translateX(-100%)'}))
  ])
  ]);
  export const slideInAnimation =
  trigger('routeAnimations', [
    transition('home <=> add', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> add', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
