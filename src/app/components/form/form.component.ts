import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { ServicesService } from 'src/app/services.service';
import { Cep } from 'src/app/cep';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTooltipModule, MatIconModule],
})
export class FormComponent {
  constructor(private services: ServicesService ){
    this.onSubmit()
  }
  cep: number | string = ''
  result: Cep[] = [];
  onSubmit(): void{
    console.log(this.cep)
    this.services.getAll(this.cep).subscribe((cep) => (this.result = cep))
    console.log(this.result)
  }
}
