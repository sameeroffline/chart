import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  searchText:any;

  hero = [
  {date:11,number:'55',placed:'Coimbatore',np:'112',pd:'New gadgets',otv:'1234',dat:'12/04/2022',comment:'requested',status:'purchase',color:'#00FFFF'},
  {date:12,number:'11',placed:'Maduari',np:'124',pd:'New gadgets & mobiles',otv:'1234',dat:'22/03/2022',comment:'requested',status:'Completed',color:'#7FFFD4' },
  {date:13,number:'23',placed:'Chennai',np:'412',pd:'Medicine',otv:'334',dat:'2/03/2022',comment:'requested',status:'purchase',color:'#F0FFFF'},
  {date:14,number:'45',placed:'Ooty',np:'462',pd:'Cloth materials',otv:'334',dat:'12/06/2022',comment:'requested',status:'Completed',color:'#F5F5DC' },
  {date:15,number:'65',placed:'Salem',np:'652',pd:'Fruits',otv:'674',dat:'2/02/2022',comment:'requested',status:'Completed',color:'#CD5C5C' },
  {date:16,number:'57',placed:'Erode',np:'102',pd:'Vegetables',otv:'374',dat:'19/03/2022',comment:'requested',status:'purchase',color:'#5F9EA0' },
  {date:17,number:'559',placed:'Tirupur',np:'372',pd:'Medicine',otv:'9864',dat:'12/05/2022',comment:'requested',status:'Completed',color:'#FF7F50'},
  {date:18,number:'52',placed:'Karaikudi',np:'183',pd:'Goods',otv:'847',dat:'2/02/2002',comment:'requested',status:'purchase',color:'#6495ED' },
  {date:19,number:'15',placed:'Dharmapuri',np:'487',pd:'New gadgets',otv:'174',dat:'15/01/2022',comment:'requested',status:'purchase',color:'#FFF8DC'},
  {date:1,number:'65',placed:'Delhi',np:'497',pd:'Machine',otv:'124',dat:'19/02/2022',comment:'requested',status:'purchase',color:'#008B8B' },
  {date:24,number:'75',placed:'Kerala',np:'276',pd:'Stationary Products',otv:'734',dat:'12/05/2022',comment:'requested',status:'purchase',color:'#A9A9A9'},
  {date:45,number:'215',placed:'Vellore',np:'13',pd:'Store Items',otv:'834',dat:'30/01/2022',comment:'requested',status:'Completed',color:'#BDB76B'},
  {date:21,number:'33',placed:'Namakal',np:'376',pd:'Delivery',otv:'734',dat:'12/09/2021',comment:'requested',status:'Completed',color:'#556B2F'},
  {date:41,number:'55',placed:'Mettupalayam',np:'372',pd:'Vegetables',otv:'174',dat:'21/02/2022',comment:'requested',status:'purchase',color:'#9932CC'},
  {date:81,number:'76',placed:'Karur',np:'897',pd:'New gadgets',otv:'5634',dat:'22/04/2022',comment:'requested',status:'Completed',color:'#E9967A'},



];

  constructor() { }

  ngOnInit(): void {
  }

}