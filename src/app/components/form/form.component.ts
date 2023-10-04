import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { ServicesService } from 'src/app/services.service';
import { Cep } from 'src/app/cep';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,  
    CommonModule,
    
  ],
})
export class FormComponent {
  constructor(private services: ServicesService) {}

  cep: string = '';
  error: string = '';
  result: Cep | null = null;
  onSubmit(): void {
    const cepPattern = /^[0-9]{8}$/;
    const validPattern = cepPattern.test(this.cep);
    if (this.cep && validPattern === false) {
      this.error = 'Digite seu cep corretamente';
    } else {
      this.services.getAll(this.cep).subscribe(
        (cepData: Cep) => { 
          this.result = cepData;
          this.error = ''; 
          console.log(this.result);
        },
        (error) => {
          this.error = 'Erro na solicitação';
        }
      );
    }
  }

  onChange(): void {
    const regex = /^[0-9]+(-[0-9]+)?$/;
    const cep = this.cep;
    if (!cep) {
      this.error = '';
    } else if (!regex.test(cep)) {
      this.error = 'Digite apenas números';
    } else if (cep.length > 8) {
      this.error = 'O CEP deve conter exatamente 8 dígitos';
    } else if (this.cep === '') {
      this.error = '';
    } else {
      this.error = '';
    }
  }
}
