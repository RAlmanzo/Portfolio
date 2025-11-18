import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

//import { provideAnimations } from '@angular/platform-browser/animations';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component')
            .then((c) => c.ContactComponent),
    },
];