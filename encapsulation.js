"use strict";
exports.__esModule = true;
var assert_1 = require("assert");
// ... Ton code ici ...
var BankCustomer = /** @class */ (function () {
    function BankCustomer(customerName, customerPassword) {
        this.customerName = customerName;
        this.customerPassword = customerPassword;
    }
    BankCustomer.prototype.getName = function () {
        return this.customerName;
    };
    BankCustomer.prototype.verifyPinInput = function (passwordEnter) {
        return (passwordEnter === this.customerPassword ? true : false);
    };
    return BankCustomer;
}());
// Tests
var customer = new BankCustomer('John Doe', '3579');
assert_1["default"].equal(typeof customer.getName, 'function');
assert_1["default"].equal(typeof customer.verifyPinInput, 'function');
assert_1["default"].equal(customer.getName(), 'John Doe');
assert_1["default"].ok(customer.verifyPinInput('3579'));
