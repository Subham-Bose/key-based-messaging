import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPanel } from './ui-panel';

describe('UiPanel', () => {
  let component: UiPanel;
  let fixture: ComponentFixture<UiPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(UiPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
