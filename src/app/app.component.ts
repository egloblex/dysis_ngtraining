import { Component } from '@angular/core';
import { Myinterface } from './myinterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chirput Pizzu';

  pizzas : Myinterface[] = [
    {Item: "Chicken Fingers", Category: "dinner", Price: 11.99},
    {Item: "Pizza", Category: "dinner", Price: 11.99},
    {Item: "Wings", Category: "sides", Price: 8.99},
    {Item: "Breadsticks", Category: "sides", Price: 4.99},
    {Item: "Ceasar Salad", Category: "saslads", Price: 5.99},
    {Item: "Cinnamon Roll", Category: "dissert", Price: 8.99},
]
}
