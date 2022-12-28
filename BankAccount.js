class Customer {
  constructor(firstName, lastName, bankAccNumb, amount, accountType) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._bankAccNumb = bankAccNumb;
    this._amount = amount;
    this._accountType = accountType;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get bankAccNumb() {
    return this._bankAccNumb;
  }

  set bankAccNumb(value) {
    this._bankAccNumb = value;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get accountType() {
    return this._accountType;
  }

  set accountType(value) {
    this._accountType = value;
  }

  static createCustomer(firstName, lastName, bankAccNumb, amount, accountType) {
    return new Customer(firstName, lastName, bankAccNumb, amount, accountType);
  }

  makeDeposit(depositAmount) {
    if (depositAmount < 0) {
      console.log("Error: Cannot make a negative deposit.");
    } else {
      this.amount += depositAmount;
    }
  }

  withdraw(withdrawalAmount) {
    if (withdrawalAmount < 0) {
      console.log("Error: Cannot make a negative withdrawal.");
    } else if (this.amount - withdrawalAmount < 0) {
      console.log("Error: Cannot make a withdrawal that would result in a negative balance.");
    } else {
      this.amount -= withdrawalAmount;
    }
  }

  static listCustomers(customers) {
    return customers.sort((a, b) => a.amount - b.amount);
  }
}
