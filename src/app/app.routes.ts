import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

//import { provideAnimations } from '@angular/platform-browser/animations';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    /*{
        path: 'about',
        loadComponent: () => import('./about/about.component')
            .then((c) => c.AboutComponent)
    },
    {
        path: 'resume',
        loadComponent: () => import('./resume/resume.component')
            .then((c) => c.ResumeComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./projects/projects.component')
            .then((c) => c.ProjectsComponent),
    },*/
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component')
            .then((c) => c.ContactComponent),
    },
];