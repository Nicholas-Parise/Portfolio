import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashPlayerComponent } from './flash-player.component';

describe('FlashPlayerComponent', () => {
  let component: FlashPlayerComponent;
  let fixture: ComponentFixture<FlashPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
