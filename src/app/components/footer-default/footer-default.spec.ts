import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDefault } from './footer-default';

describe('FooterDefault', () => {
  let component: FooterDefault;
  let fixture: ComponentFixture<FooterDefault>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterDefault]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDefault);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
