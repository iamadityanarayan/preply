import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jumbo1Component } from './jumbo1.component';

describe('Jumbo1Component', () => {
  let component: Jumbo1Component;
  let fixture: ComponentFixture<Jumbo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jumbo1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Jumbo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
