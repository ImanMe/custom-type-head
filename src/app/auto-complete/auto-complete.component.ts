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
  dealersPerPage: Dealer[];
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
    this.searchResult = this.service.getDealers();
    this.totalResultCount = this.searchResult.length;
    this.paginate();
    this.totalNumberOfPages = Math.ceil(this.totalResultCount / this.countPerPage);
  }

  searchDealers = (): void => {
    if (this.value) {
      this.pageNumber = 1;
      this.getDealersBySearchKey();
      this.totalResultCount = this.searchResult.length;
      this.paginate();
      this.totalNumberOfPages = Math.ceil(this.totalResultCount / this.countPerPage);
    }
    else {
      this.initResult();
    }
  }

  getDealersBySearchKey = () => {
    this.searchResult = this.searchResult
      .filter(x => x.name.toLocaleLowerCase()
        .includes(this.value.toLocaleLowerCase())
        || x.id.toLocaleLowerCase()
          .includes(this.value.toLocaleLowerCase()));
  }

  paginate = () => {
    let startingElement = 1;

    if (this.pageNumber > 1) {
      startingElement = (this.pageNumber - 1) * this.countPerPage + 1;
    }

    this.dealersPerPage = this.searchResult.slice(startingElement, startingElement + this.countPerPage);
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


