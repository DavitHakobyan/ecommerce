# Frontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.12.

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


### Add bootstrap support into the angular project


### FAQ: Display Category Name in Product List Grid

Question:

How can I put a title in each product category grid list?

What I want to learn is how I can put the category title(Books, Coffee Mugs and other thngs ) at the top of product grid list? I know it can be solved by binding but I don't know how to do that?

Answer:

https://github.com/darbyluv2code/fullstack-angular-and-springboot/blob/master/bonus-content/ecommerce-project/01-display-category-name-in-product-list-grid/01-display-category-name-in-product-list-grid.md


### Implementing pagination in the product list

```shell
ng add @angular/localize
```

```shell
ng add @ng-bootstrap/ng-bootstrap
```

### Using OKTA for Authentication

Go to the [OKTA Developer Console](https://developer.okta.com/) and create a new application. Choose "Single-Page Application" as the platform. Follow the instructions to set up your application, and make sure to note your `Client ID` and `Issuer URL`.

```shell
npm install @okta/okta-angular@latest 
```

```shell
npm install @okta/okta-auth-js@latest
```

```shell
npm install @okta/okta-signin-widget@latest
```


