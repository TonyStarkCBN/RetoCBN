import {Component, Inject, forwardRef} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
    display: boolean;
    modalbusinessprofile: boolean;
    constructor(public app: AppComponent) {}
}
