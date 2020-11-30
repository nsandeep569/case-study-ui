import { Component, OnInit } from '@angular/core';
import {QuotesService} from './../services/quotes.service'

export interface Quotes{
  id:string;
  customerName:string;
  insurance:string;
  value:number;
  rate:number; 
  canUpdate?:boolean;
}
@Component({
  selector: 'app-quotes-all',
  templateUrl: './quotes-all.component.html',
  styleUrls: ['./quotes-all.component.scss']
})
export class QuotesAllComponent implements OnInit {
  displayedColumns: string[] = ['id','customerName','insurance','value','rate','premium']
  //columns that will be displayed on screen for angular material table
  orderStatus:any={1:'Order Recieved',2:'Preparing',3:'Ready To Serve'} //using object to store status mapping
  dataSource : Quotes[];
  dataEntered:any={}
  constructor(private quotesService:QuotesService) { 
    
    
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('level')==='2')
    {
      this.displayedColumns.push('action')
    }
    this.quotesService.getQuotes().subscribe(data=>{
      console.log(data);
      this.dataSource=data
    })
  }
  updateRate(id)
  {
console.log(id)
console.log(this.dataSource )
for( let i=0;i<=this.dataSource.length;i++)
{
  if(this.dataSource[i].id===id)
  {
    this.dataSource[i].canUpdate=true
    console.log(this.dataSource)
    break;
  }
}
}
updateDone(id){
  for( let i=0;i<=this.dataSource.length;i++)
{
  if(this.dataSource[i].id===id)
  {
    this.dataSource[i].canUpdate=false
    console.log(this.dataEntered)
    this.dataSource[i].rate=this.dataEntered[id]
    console.log(this.dataSource)
    break;
  }
}
}


}




