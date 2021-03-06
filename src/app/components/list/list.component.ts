import { Component,Optional, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Service1Service} from '../../services/service1.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  //getdata=new Service1Service();
  
  constructor(@Optional() public getdata:Service1Service) { 
    
  }
  @Input()  dataArr:Array<any>;
  @Output() getIndex=new EventEmitter();
  ngOnInit() {
    //this.getdata.get();
  }
  aa;
  dataA = [];
  bb=0;
  delData(i){
    this.dataArr.splice(i,1);
   this.aa=this.dataArr.length;
  }
  change(i){
    this.dataA.push(this.dataArr[i])
    this.dataArr.splice(i,1);
    this.bb= this.dataA.length;
    this.aa=this.dataArr.length;
  }
  delData2(i){
    this.dataA.splice(i,1);
    this.bb= this.dataA.length;  
  }
  change2(i){ 
    this.dataArr.push(this.dataA[i])
    this.dataA.splice(i,1);
    this.aa=this.dataArr.length;
    this.bb= this.dataA.length;
  }
  fn(i){
    //将下标抛出去
    this.getIndex.emit(i);
  }
}
