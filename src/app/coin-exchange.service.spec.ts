import { TestBed, inject } from '@angular/core/testing';

import { CoinExchangeService } from './coin-exchange.service';

describe('CoinExchangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinExchangeService]
    });
  });

  it('should be created', inject([CoinExchangeService], (service: CoinExchangeService) => {
    expect(service).toBeTruthy();
  }));
});
