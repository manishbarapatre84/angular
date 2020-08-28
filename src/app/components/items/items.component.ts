import { Item } from './../../models/item';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  itemTypeList: String[] = [];
  tmpItem : Item;
  itemForm: FormGroup;
  itemtypeError : boolean = false;
  displayedColumns: string[] = ['itemname', 'itemcategory', 'itemtype', 'status'];
  dataSource ;

  ELEMENT_DATA: Item[] = [
    {itemid: 1, itemname: 'as', itemcategory: 'as',itemtype: 'as',status:'as'}
  ];


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private formBuilder: FormBuilder) { }

  get f() { return this.itemForm.controls; }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Item>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;

    this.itemForm = this.formBuilder.group({
      itemid: [],
      itemname: ['', Validators.required],
      itemcategory: [],
      itemtype: [],
      status:[]
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  addType(val){
    this.itemtypeError=false;
    console.log("addType : CALLED : " + val);
    val = this.itemForm.get('itemtype').value;
    const index: number = this.itemTypeList.indexOf(val);
    console.log("Index : "+index);
    if(index<0){
      this.itemTypeList.push(val);
      this.itemForm.patchValue({itemtype: ''});
    }else{
      this.itemtypeError=true;
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  removeType(val){
    console.log("removeType CALLED : " + val);
    this.itemTypeList.splice(val, 1);
    this.itemtypeError=false;
  }

  onSubmit(){

    if (this.itemForm.invalid) {
      console.log("Form Invalid");
      return;
    }
    this.tmpItem =  this.itemForm.value;

    this.tmpItem.itemtype =this.itemTypeList.map(x=>x).join("|");
    //console.log(this.tmpItem);
    this.dataSource.data.push(this.tmpItem);
    this.dataSource.filter = "";
    //console.log(this.dataSource.data);
  }
}

