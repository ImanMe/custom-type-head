import { DealerService } from './../dealer.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Dealer } from '../dealer';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  value = '';
  countPerPage = 5;
  allDealers: Dealer[];
  currentPageDealers: Dealer[];
  searchResult: Dealer[];
  totalResultCount: number;
  pageNumber = 1;
  totalNumberOfPages: number;

  @Output() dealerSelected = new EventEmitter<Dealer>();

  constructor(private service: DealerService) { }

  ngOnInit(): void {
    this.initResult();
  }

  initResult = () => {
    this.allDealers = this.service.getDealers();
    this.searchResult = this.allDealers;
    this.totalResultCount = this.allDealers.length;
    this.setTotalNumberOfPages();
    this.currentPageDealers = this.allDealers.slice(0, 5);
  }

  searchDealers = (): void => {
    if (this.value) {
      this.pageNumber = 1;
      this.getDealersBySearchKey();
      this.totalResultCount = this.searchResult.length;
      this.setTotalNumberOfPages();
      this.paginate();
    }
    else {
      this.initResult();
    }
  }

  setTotalNumberOfPages = () => this.totalNumberOfPages = Math.ceil(this.totalResultCount / this.countPerPage);

  getDealersBySearchKey = () => {
    this.searchResult = this.allDealers
      .filter(x => x.name.toLocaleLowerCase()
        .includes(this.value.toLocaleLowerCase())
        || x.id.toLocaleLowerCase()
          .includes(this.value.toLocaleLowerCase()));
  }

  paginate = () => {
    let startingElement = 0;
    if (this.pageNumber > 1) {
      startingElement = (this.pageNumber - 1) * this.countPerPage;
    }
    this.currentPageDealers = this.searchResult.slice(startingElement, startingElement + this.countPerPage);
  }

  next = () => {
    this.pageNumber++;
    this.paginate();
  }

  prev = () => {
    this.pageNumber--;
    this.paginate();
  }

  onDealerSelect = (selectedDealer: Dealer) => this.dealerSelected.emit(selectedDealer);
}


