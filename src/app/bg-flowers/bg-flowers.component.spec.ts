import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgFlowersComponent } from './bg-flowers.component';

describe('BgFlowersComponent', () => {
  let component: BgFlowersComponent;
  let fixture: ComponentFixture<BgFlowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgFlowersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgFlowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
