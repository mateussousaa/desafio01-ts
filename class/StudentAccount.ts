import { DioAccount } from "./DioAccount";

export class StudentAccount extends DioAccount {
  deposit = (value: number): void => {
    value += 10
    const balanceValue = this.getBalance()
    this.setBalance(balanceValue + value)
  }
}