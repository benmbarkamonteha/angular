import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerItemCard } from './component/customer-item-card/customer-item-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomerItemCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('collection-manager');
}
