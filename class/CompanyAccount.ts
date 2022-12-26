import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    const accountStatusIsValid = this.validateStatus() === true;
    if (!accountStatusIsValid) {
      throw new Error('Invalid transaction - Loan')
    }
    this.deposit(value)
  }
}
