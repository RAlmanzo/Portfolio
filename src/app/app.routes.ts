import { Routes } from '@angular/router';

//import { provideAnimations } from '@angular/platform-browser/animations';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./landing-page/landing-page.component')
            .then((c) => c.LandingPageComponent),
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component')
            .then((c) => c.ContactComponent),
    },
];