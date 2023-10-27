
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { OrderService } from '../../service/order.service';
import { IOrder } from '../../interface/IOrder.interface';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ MatTabsModule, NgFor, MatButtonModule, MatCardModule, MatIconModule, RouterModule ],
  templateUrl: './list-page.component.html',
})
export class ListPageComponent  {

  filterTabs: string[] = ['Todo','Pendientes','Completas']

  public orderList: IOrder[] = [];

  constructor( private orderService: OrderService ) {}

  ngOnInit(): void { 
    this.orderService.getOrders()
        .subscribe( order => this.orderList = order );
  }

}
