angular
  .module('app')
  .factory('ContactFactory', function (ContactService) {
    var factory = {};

    factory.add = add;

    function add(contact) {
      ContactService.push(contact);
      console.log(ContactService.getList());
    }

    return factory;
    /*
    var factory = {};
    factory.sub = sub;
    factory.sum = sum;

    function sub(num1, num2) {
      return num1 - num2;
    }

    function sum(num1, num2) {
      return num1 + num2;
    }

    return factory;
    */
  });
