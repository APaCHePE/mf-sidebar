import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideAnimations} from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { getSingleSpaExtraProviders } from 'single-spa-angular';
import { APP_BASE_HREF } from '@angular/common';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
// };
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideAnimations(),
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
    getSingleSpaExtraProviders(),
    // providePrimeNG({
    //   ripple: true,
    //   inputStyle: 'filled',
    //   theme: { preset: MyPreset, options: { darkModeSelector: '.app-dark' } },
    // }),
  ]
};