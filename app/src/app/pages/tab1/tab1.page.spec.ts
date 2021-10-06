import { ComponentFixture, TestBed } from '@angular/core/testing';

// PAGES
import { Tab1Page } from './tab1.page';

// LIBRARIES
import { TranslateService } from '@ngx-translate/core';

// CONFIGURATIONS
import { SetupTest, SpyMockConfig } from '@testing/index';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;
  let translate: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.config).compileComponents();

    translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
