export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    this.balance += value
  }

  withdraw = (value: number): void => {
    const accountStatusIsValid = this.validateStatus() === true;
    const valueIsValid = value <= this.balance
    if (!accountStatusIsValid || !valueIsValid) {
      throw new Error('Invalid transaction - withdraw')
    }
    this.balance -= value
  }

  getBalance = (): number => {
    return this.balance
  }

  protected setBalance = (value: number): void => {
    this.balance = value
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Invalid Account - validate Status')
  }
}
