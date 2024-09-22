import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimfoniComponent } from './simfoni.component';

describe('SimfoniComponent', () => {
  let component: SimfoniComponent;
  let fixture: ComponentFixture<SimfoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimfoniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimfoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
