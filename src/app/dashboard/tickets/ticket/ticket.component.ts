import { Component } from '@angular/core';
import { NewTicketsComponent } from "../new-tickets/new-tickets.component";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NewTicketsComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

}
