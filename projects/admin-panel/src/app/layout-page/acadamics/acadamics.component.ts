import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';
import { Acadamic } from '../../models/business';
import { EducationType, Months } from '../../models/common';
import { AcadamicFormValid } from '../../models/form-validation';
import { AcadamicsService } from '../../services';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-acadamics',
  templateUrl: './acadamics.component.html',
  styleUrls: ['./acadamics.component.css'],
})

export class AcadamicsComponent implements OnInit {

  //grid Reperesnataion
  public listofAcadamics: Array<Acadamic> = [];

  // drop-down represenation
  public educationTypes: Array<EducationType> = [];
  public monthList: Array<Months> = [];
  public selectText: string = "Select";
  public myDateValue?: Date;

  // form varialble
  public acadamicFormGroup!: FormGroup;
  public acadamicForm = new AcadamicFormValid();

  constructor(
    private acadamicsService: AcadamicsService,
    private commonService: CommonService,
    private formBuilder: RxFormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.selectText = 'Select';


    let _acadamicFormValid = this.acadamicForm;
    this.acadamicFormGroup = this.formBuilder.formGroup(_acadamicFormValid);

    this.myDateValue = new Date();

    this.getAllAcadamic();
    this.getAllEducationType();


    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  public getAllAcadamic() {
    this.acadamicsService.getAllAcadamic().subscribe((value) => {
      this.listofAcadamics = value;
    });
  }

  public readAcadmic(item: any) {
    this.listofAcadamics.find(x => x._id == item._id);
  }

  /**
   * getAllEducationType
   */
  public getAllEducationType() {
    this.commonService.getAllEducationType().subscribe((value) => {
      this.educationTypes = value;
    });
    this.commonService.getAllMonths().subscribe((value) => {
      this.monthList = value;
    })
  }

  public submitAcadamics(): void {
    this.acadamicsService.saveAcadamic(this.acadamicFormGroup.value).subscribe((value) => {
     })
  }

}
