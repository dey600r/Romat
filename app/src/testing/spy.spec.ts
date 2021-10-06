import { AngularDelegate, ModalController, NavParams, Platform, PopoverController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';

// PLUGINS
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// LIBRARIES
import { TranslateService } from '@ngx-translate/core';

// SERVICES

// MOCK
import { MockData } from './mock-data.spec';
import { ModalInputModel } from '@src/app/core/models';


export class SpyMockConfig {
    static SpyConfig = {
        statusBar: jasmine.createSpyObj('StatusBar', ['styleBlackTranslucent']),
        splashScreenSpy: jasmine.createSpyObj('SplashScreen', ['hide']),
        platformReadySpy: Promise.resolve(),
        platformSpy: {
            ready: jasmine.createSpy().and.returnValue(Promise.resolve()),
            backButton: {
                subscribeWithPriority: jasmine.createSpy('subscribeWithPriority', (priority, fn) => true)
            },
            is: jasmine.createSpy().and.returnValue((platform: any): boolean => (platform === 'android')),
            width: jasmine.createSpy().and.returnValue(800),
            height: jasmine.createSpy().and.returnValue(700),
        },
        screenOrientation: {
            onChange: jasmine.createSpy().and.returnValue(new Observable((res) => { res.next(); }))
        }
    };

    static Providers = [
        TranslateService,
        ModalController,
        AngularDelegate,
        PopoverController,
        { provide: StatusBar, useValue: SpyMockConfig.SpyConfig.statusBar },
        { provide: SplashScreen, useValue: SpyMockConfig.SpyConfig.splashScreenSpy },
        { provide: Platform, useValue: SpyMockConfig.SpyConfig.platformSpy },
        { provide: ScreenOrientation, useValue: SpyMockConfig.SpyConfig.screenOrientation },
    ];

    static getProviderNavParams(data: ModalInputModel) {
        return {provide: NavParams, useValue: { data }};
    }
}
