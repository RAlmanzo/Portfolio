import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
//import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

import { provideAnimations } from '@angular/platform-browser/animations';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', 
        loadComponent: () => import('./contact/contact.component')
            .then( (c) => c.ContactComponent),
    },
];
