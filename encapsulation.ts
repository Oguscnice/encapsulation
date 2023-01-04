import  assert  from  'assert';

// ... Ton code ici ...
class BankCustomer{
  private customerName : string;
  private customerPassword : string;
  constructor(customerName : string, customerPassword : string){
    this.customerName = customerName;
    this.customerPassword = customerPassword;
  }
  getName() : string{
    return this.customerName;
  }
  verifyPinInput(passwordEnter : string) : boolean {
    return (passwordEnter === this.customerPassword ? true : false);
  }
}

// Tests
const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));