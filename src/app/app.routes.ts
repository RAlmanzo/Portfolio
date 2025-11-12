import { provideRouter, Routes, withInMemoryScrolling } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';
//import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';
//import { ResumeComponent } from './resume/resume.component';
//import { ContactComponent } from './contact/contact.component';
//import { ProjectsComponent } from './projects/projects.component';

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

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(
            routes,
            withInMemoryScrolling({
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled'
            })
        )
    ]
});