import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});