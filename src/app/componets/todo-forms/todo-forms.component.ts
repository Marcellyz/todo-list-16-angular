import { TodoSignalsService } from './../../services/todo-signals.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-todo-forms',
  standalone: true,
  imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
  ],
  templateUrl: './todo-forms.component.html',
  styleUrls: []
})
export class TodoFormsComponent {
 private todoSignalsService = inject(TodoSignalsService)
 private allTodos = this.todoSignalsService.todoState();

 private todosForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required,Validators.minLength(5)]),
 })

 private handleCreateNewTodo(): void {
  if (this.todosForm.value && this.todosForm.valid) {
    const title = String(this.todosForm.controls['title'].value)
    const description = String(this.todosForm.controls['description'].value)
  }
 }
}
