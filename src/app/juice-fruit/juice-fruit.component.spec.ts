import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuiceFruitComponent } from './juice-fruit.component';

describe('JuiceFruitComponent', () => {
  let component: JuiceFruitComponent;
  let fixture: ComponentFixture<JuiceFruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuiceFruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuiceFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
