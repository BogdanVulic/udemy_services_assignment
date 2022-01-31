import { Injectable } from "@angular/core";
import { CountService } from "./count.service";

@Injectable()

export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private countService: CountService) { }

  setToActive(id: number) {
    this.activeUsers.push(...this.inactiveUsers.splice(id, 1));
    this.countService.countInactiveToActive();
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(...this.activeUsers.splice(id, 1));
    this.countService.countActiveToInactive();
  }
}
