# NgDashboardWidget
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

# Creating Angular Elements with Ngx-build-plus
1. Creating new angular project  
`ng new ng-dashboard-widget`

2. When the terminal ask us to add **Would you like to add Angular routing?**, we choose No.  

3. We’re going to add the @angular/elements and ngx-build-plus.  
`ng add @angular/elements`  
`ng add ngx-build-plus`

4. To check is the installation was successful, go to the `angular.json` and check the property `builder` under `architect → build`, should be `“builder”: “ngx-build-plus:browser”`

5. Let’s remove `AppComponent` from the bootstrap property in the `@NgModule` declaration, and add the custom element in `~/src/app/app.module.ts`.  
    ```TSX
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule, DoBootstrap, Injector } from '@angular/core';
    import { createCustomElement } from '@angular/elements';

    import { AppComponent } from './app.component';

    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [],
    entryComponents: []
    })
    export class AppModule implements DoBootstrap {
        constructor(private injector: Injector) { }
        ngDoBootstrap() {
            const external = createCustomElement(AppComponent, { injector: this.injector });
            customElements.define('external-custom-element', external);
        }
    }

    ```
6. Modify the index.html, adding the angular element tag (in this case the tag name is `external-custom-element`) and `zone.min.js` needed to run angular, `webcomponents-bundle.js` and `custom-elements-es5-adapter.js`, and `polyfill.js` to make it cross browser compatible.    

    ```HTML
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>NgDashboardWidget</title>
        <base href="/">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
    </head>
    <body>
        <external-custom-element></external-custom-element>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.4/polyfill.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.10/webcomponents-bundle.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.1/zone.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.10/custom-elements-es5-adapter.js"></script>

        <script type="text/javascript" src="main-es5.js"></script>
    </body>
    </html>
    ```   
7. Run the command to generate the build.  
`ng build --prod --output-hashing none --single-bundle true`

8. To test our component, let’s install `http-server`  
`npm i -g http-server`
    1. Start the server.  
    `http-server ./dist/ng-dashboard-widget -p 8081`

9. Now let’s change the build files from `main-es5.js` to `{project-name}-bundle.js.` and put it into another [angular project](https://github.com/ccchen1991/ng-dashboard-shell/tree/master/src/assets) to test our micro front with Angular Element  

# References
* [Link 1](https://dzone.com/articles/build-micro-front-ends-using-angular-elements-the)
* [Link 2](https://medium.com/@het/micro-front-end-with-angular-elements-web-components-c56b7a235bcb)
* [Link 3](https://github.com/manfredsteyer/ngx-build-plus#advanced-example-externals-and-angular-elements)
* [Link 4](https://www.angulararchitects.io/aktuelles/your-options-for-building-angular-elements/)
* [Link 5](https://blog.bitsrc.io/using-angular-elements-why-and-how-part-1-35f7fd4f0457)