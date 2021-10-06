import { ComponentFixture, TestBed } from '@angular/core/testing';

// PAGES
import { Tab3Page } from './tab3.page';

// LIBRARIES
import { TranslateService } from '@ngx-translate/core';

// CONFIGURATIONS
import { SetupTest, SpyMockConfig } from '@testing/index';

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;
  let translate: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.config).compileComponents();

    translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
