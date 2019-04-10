import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('Portfolio => Home', [
            // Initial state of new route
            query(':enter',
                style({
                    position: 'fixed',
                    width: '100%',
                    transform: 'translateX(-100%)'
                }), { optional: true }),
            // move page off screen right on leave
            query(':leave',
                animate('200ms ease',
                    style({
                        position: 'fixed',
                        width: '100%',
                        transform: 'translateX(100%)',
                    })
                ), { optional: true }),
            // move page in screen from left to right
            query(':enter',
                animate('200ms ease',
                    style({
                        opacity: 1,
                        transform: 'translateX(0%)'
                    })
                ), { optional: true }),
        ]),
        // RIGHT TO LEFT AKA NEXT
        transition('Home => Portfolio', [
            // Initial state of new route
            query(':enter',
                style({
                    position: 'fixed',
                    width: '100%',
                    transform: 'translateX(100%)'
                }), { optional: true }),
            // move page off screen right on leave
            query(':leave',
                animate('200ms ease',
                    style({
                        position: 'fixed',
                        width: '100%',
                        transform: 'translateX(-100%)',
                    })
                ), { optional: true }),
            // move page in screen from left to right
            query(':enter',
                animate('200ms ease',
                    style({
                        opacity: 1,
                        transform: 'translateX(0%)'
                    })
                ), { optional: true }),
        ])
    ]);