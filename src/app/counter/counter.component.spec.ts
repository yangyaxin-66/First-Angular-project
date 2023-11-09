import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should Onincrease', () => {
    component.number =2
    component.Onincrese();

    expect(component.number).toEqual(3);
  });

  it('should Ondescrease', () => {
    component.number = 2
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click')
    fixture.detectChanges()

    const text = fixture.debugElement.query(By.css('span')).nativeElement.textContent
    expect(text).toEqual(' number: 3 ');
  });

  it('should decrease',() => {
  component.number = 2

  expect(component.isShow).toEqual(true);
  });
})
