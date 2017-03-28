/**
 *
 * Copyright 2017, Andrea Sonny, All rights reserved.
 *
 * @author: Andrea Sonny <andreasonny83@gmail.com>
 */

/*
 * Angular bootstraping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode }         from '@angular/core';

import { AppModule }              from './app/app.module';

if ('production' === ENV) {
 // Production
 enableProdMode();
 if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/service-worker.js').catch(function(err) {
     console.log('Error installing service worker: ', err);
   });
 }
}

/*
* Bootstrap our Angular app with a top level NgModule
*/
platformBrowserDynamic().bootstrapModule(AppModule);
