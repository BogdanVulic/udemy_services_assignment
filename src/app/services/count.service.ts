import { Injectable } from "@angular/core";

@Injectable()

export class CountService {

  activeToInactive: number = 0;
  inactiveToActive: number = 0;

  countActiveToInactive() {
    this.activeToInactive++;
  }
  countInactiveToActive() {
    this.inactiveToActive++;
  }

}
