import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormsComponent } from './todo-forms.component';

describe('TodoFormsComponent', () => {
  let component: TodoFormsComponent;
  let fixture: ComponentFixture<TodoFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TodoFormsComponent]
    });
    fixture = TestBed.createComponent(TodoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
