import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InvoiceModule } from './invoice/invoice.module';
import { ProductModule } from './product/product.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InvoiceModule, ProductModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Amelia Lis';
  imie = "Amelia"
  nazwisko = "Lis"
}
