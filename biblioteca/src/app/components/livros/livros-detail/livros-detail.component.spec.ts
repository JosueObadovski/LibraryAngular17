import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosDetailComponent } from './livros-detail.component';

describe('LivrosDetailComponent', () => {
  let component: LivrosDetailComponent;
  let fixture: ComponentFixture<LivrosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivrosDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LivrosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
