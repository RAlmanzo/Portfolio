💼# Personal Portfolio – Angular 19

This is my personal portfolio website, build using Angular 19. It includes the following pages:

🏠 Home
🧑‍💻 About Me
📄 Resume
💡 Projects
📬 Contact

This project was both a portfolio and a learning journey. I had no prior experience with Angular, and taught myself everything through:

Official Angular documentation
Online tutorials and guides
Stack Overflow and other online resources

🚀 Project Overview
This project helped me understand and apply:

✅ Component-based architecture
✅ Routing and navigation
✅ Data-binding and forms
✅ Service-based logic and dependency injection
✅ Responsive design with a mobile-first approach
✅ Animations using animate.css, ngx, and custom CSS
✅ Styling with CSS and Bootstrap

⚙️ Prerequisites & Setup
📦 Requirements
Node.js (v18+ recommended): Download Node.js

Angular CLI: Install globally via npm:
```bash
npm install -g @angular/cli
```

🛠️ Installation
Clone the repository:

git clone https://github.com/your-username/portfolio-angular19.git

```bash
cd portfolio-Angular-Frontend
```

Install the dependencies:
```bash
npm install
```

🧪 Development Server
To start the development server, run:
```bash
npm start
```
This command uses the script defined in package.json:
"start": "ng serve -o"
The -o flag automatically opens http://localhost:4200/ in your browser.

Alternatively, use:
```bash
ng serve
```
and go to http://localhost:4200/

🏗️ Build for Production
To create an optimized production build:
```bash
ng build --configuration production --base-href "/Portfolio/"
```
Build output will be located in the dist/ folder.

☁️ Deployment with GitHub Pages
The project is hosted online using GitHub Pages. After each build, the compiled files from the dist/ folder are not yet deployed automatically with github actions (implementation in progress).
```bash
angular-cli-ghpages --dir=dist/portfolio-angular-frontend/browser
```

🧪 Run Unit Tests
To execute unit tests with Karma:
```bash
ng test
```

✨ Animations & Styling
CSS – Custom styles per component
Bootstrap – Layout, grid, utilities
Animate.css – Prebuilt animation classes
ngx-animate – Angular integration for animations

You can visit the live site here:
🔗 https://ralmanzo.github.io/Portfolio/

🔄 CI/CD with GitHub Actions
I have configured GitHub Actions to run an automated build workflow on:
Every push or pull request to the main or dev branch
Ensuring that the Angular app compiles successfully before merging
✅ This provides continuous integration and helps avoid broken builds.

Sample workflow steps include:

Checkout code
Install dependencies
Run ng build --configuration production
Deploy to GitHub Pages (on main branch)

📚 Learning Resources
I used the following to teach myself Angular:

Angular Official Documentation
Angular CLI Reference
Stack Overflow
YouTube tutorials (v15–v19)
GitHub repos and articles

👨‍💻 About Me
I'm a self-taught developer passionate about web development. I started this project with zero experience in Angular, and built a complete responsive portfolio by learning and applying everything on my own.

📬 Contact
Want to connect or collaborate?

📧 Email: your.email@example.com
💼 LinkedIn: Your Name
🌐 Live Site: https://ralmanzo.github.io/Portfolio/





















# Portfolio in Angular 19

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
