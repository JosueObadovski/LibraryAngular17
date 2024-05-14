import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorasDetailComponent } from './editoras-detail.component';

describe('EditorasDetailComponent', () => {
  let component: EditorasDetailComponent;
  let fixture: ComponentFixture<EditorasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorasDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
