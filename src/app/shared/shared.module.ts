import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { ToggleFullscreenDirective } from './fullscreen/toggle-fullscreen.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import {AuthService} from './auth/auth.service';
import {AccountService} from './auth/account.service';
import {SigninService} from '../authentication/signin/signin.service';
import {AuthJwtService} from './auth/auth-jwt.service';
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';

@NgModule({
  declarations: [ AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective, ToggleFullscreenDirective ],
  exports:      [ AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective, ToggleFullscreenDirective ],
  providers: 	[ MenuItems,
    AccountService,
    SigninService,
    AuthService,
    AuthJwtService,
    LocalStorageService,
    SessionStorageService
  ]
})
export class SharedModule { }
