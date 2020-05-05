import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LocationComponent } from './components/location/location.component';
import { HabitsComponent } from './components/habits/habits.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { FakeComponent } from './components/fake/fake.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  { path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: '/home/landing', pathMatch: 'full'},
      { path: 'landing', component: LandingComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'location', component: LocationComponent },
      { path: 'habits', component: HabitsComponent },
      { path: 'fake', component: FakeComponent }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
