import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { MainComponent } from './main/main.component';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // 첫 화면을 main 페이지로 설정
  
  { path: 'home', component: HomeComponent }, // main
  
  { path: 'gallery', component: GalleryComponent }, // gallery
  { path: 'location', component: LocationComponent }, // location
  { path: 'about', component: AboutComponent }, // about



  //{ path: 'test', component: TestComponent }, // main

  { path: '**', redirectTo: '/home', pathMatch: 'full' }, // 잘못된 URL을 사용했을때 main 페이지로 돌려보냄.
 
];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes, {useHash: true});