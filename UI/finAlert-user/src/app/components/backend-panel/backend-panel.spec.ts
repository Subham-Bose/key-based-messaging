import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendPanel } from './backend-panel';

describe('BackendPanel', () => {
  let component: BackendPanel;
  let fixture: ComponentFixture<BackendPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(BackendPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
