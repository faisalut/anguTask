import { Component, OnInit } from '@angular/core';
import {CountryData} from 'src/app/data/country';
import { DomSanitizer} from '@angular/platform-browser';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
  }

  selectedIndex!:number;

  profile = 'assets/images/profile.jpg';
 
  countryList:any= CountryData.countryList();

  goto(item:any,index:number)
  {
    this.selectedIndex = index;
    this.homeService.setValue(item);
  }

  getSvg(svg:any)
  {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }


}
