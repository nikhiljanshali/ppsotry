import { Component, OnInit } from '@angular/core';
import { Acadamic } from '../../models/business';
import { AcadamicsService } from '../../services';

@Component({
  selector: 'app-acadamics',
  templateUrl: './acadamics.component.html',
  styleUrls: ['./acadamics.component.css'],
})
export class AcadamicsComponent implements OnInit {

  public listofAcadamics: Array<Acadamic> = [];

  constructor(
    private acadamicsService: AcadamicsService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.acadamicsService.getAllAcadamic().subscribe((value) => {
        this.listofAcadamics = value;
      });
    }, 5000);
  }

}
