import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { StudentAccount } from './class/StudentAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const studentAccount: StudentAccount = new StudentAccount('User', 999)

console.log(peopleAccount.getName())
console.log(peopleAccount.getBalance())
peopleAccount.deposit(10)
console.log(peopleAccount.getBalance())
peopleAccount.withdraw(5)
console.log(peopleAccount.getBalance(), '\n')

console.log(companyAccount.getName())
console.log(companyAccount.getBalance())
companyAccount.deposit(10)
console.log(companyAccount.getBalance())
companyAccount.withdraw(5)
console.log(companyAccount.getBalance())
companyAccount.getLoan(1000)
console.log(companyAccount.getBalance(), '\n')

console.log(studentAccount.getName())
console.log(studentAccount.getBalance())
studentAccount.deposit(10)
console.log(studentAccount.getBalance())
studentAccount.withdraw(5)
console.log(studentAccount.getBalance())