import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {

  subscription:Subscription[] =[];
  selectedCountry:any;
  searchCities:any[]=[];
  searchTerm = 'a';  // BECAUSE NULL GET ERROR IN SERACH API
  isLoad =false;

  constructor(
    private homeService:HomeService,
    private sanitizer:DomSanitizer
  ) { }
  
  ngOnInit(): void {
    this.getSelectedCountry();
  }

  getSelectedCountry(){
    this.subscription.push(this.homeService.getValue().subscribe(
      res=>{
        this.searchTerm ='a';
        this.selectedCountry = res;
        this.getCities(this.selectedCountry.country_iso_code);
      }
    )
    )
  }

  getSvg()
  {
    return this.sanitizer.bypassSecurityTrustHtml(this.selectedCountry.svg);
  }

  

  getCities(val:String){
    this.isLoad =true;
    this.subscription.push(
      this.homeService.getCities(1,20,val,'a').subscribe(
        res=>{
          this.isLoad =false;
          console.log(res);   
          this.searchCities = res.results; 
        }
      )
    )
  }

  getSerch(env:any){
    console.log(env.target.value);
    this.searchCities =[];
    this.isLoad =true;
    this.subscription.push(
      this.homeService.getCities(1,20,'IN',env.target.value).subscribe(
        res=>{
          this.isLoad =false;
          console.log(res);   
          this.searchCities = res.results; 
        }
      )
    )
  }
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
