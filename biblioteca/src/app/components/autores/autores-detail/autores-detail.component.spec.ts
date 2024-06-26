import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresDetailComponent } from './autores-detail.component';

describe('AutoresDetailComponent', () => {
  let component: AutoresDetailComponent;
  let fixture: ComponentFixture<AutoresDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoresDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoresDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
