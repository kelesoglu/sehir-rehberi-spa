import { Component, OnInit } from '@angular/core';
import {CityService} from "../../services/city.service";
import {FormGroup,FormControl,Validators,FormBuilder} from "@angular/forms"
import {City} from "../../models/city";
import {AuthService} from "../../services/auth.service";
import {Editor} from 'ngx-editor';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css'],
  providers:[CityService,AuthService]
})
export class CityAddComponent implements OnInit {

  constructor(private cityService:CityService ,private formBuilder:FormBuilder,
              private authService:AuthService
  ) { }

  city:City
  cityAddForm:FormGroup;
  editor: Editor;
  html:''

  createCityForm(){//Buraya plaka no eklenecek
    this.cityAddForm=this.formBuilder.group(
      {name:["",Validators.required],
      description:["",Validators.required]})
  }

  ngOnInit(): void {
    this.createCityForm();
    this.editor = new Editor();
  }

  add(){
    if (this.cityAddForm.valid){
      this.city=Object.assign({},this.cityAddForm.value);
      /*Eklenecek işlem var vt içerisinden çeklicek userId*/
      this.city.userId=this.authService.getCurrentUserId();
      this.cityService.add(this.city);

    }
  }
}
