import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  room: number;
  guest:string;
  problem: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {guest:'Nandos',room: 130, problem: 'window broken', status: 'Priority'},
  {guest:'Stellas', room: 125, problem: 'airco not working', status: 'Medium'},
  {guest: 'Lindas',room: 415, problem: 'peint bathroom door', status: 'Urgent'},
  {guest: 'Attilos', room: 431, problem: 'change bed light', status: 'Medium'},
  {guest: 'Candelas', room: 219, problem: 'peint roof', status: 'Priority'},
  {guest: 'Antillos', room: 405, problem: "change battery tv", status: 'Urgent'},
  
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-table-basic-example',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table-basic-example.component.html',
  styleUrl: './table-basic-example.component.css'
})
export class TableBasicExampleComponent {
  displayedColumns: string[] = ['guest', 'room', 'problem', 'status'];
  dataSource = ELEMENT_DATA;

}
