angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (ContactFactory) {
      var vm = this;
      vm.hero = 'New contact';
      vm.heroList = 'List a contact';
      vm.list = [];

      vm.form = {
        name: '',
        telephone: '',
        email: ''
      };

      vm.add = add;

      (function () {
        vm.list = ContactFactory.list();
        return vm.list;
      })();

      function add(contact) {
        if (!contact) {
          console.log('You must need a valid contact');
          return;
        }
        ContactFactory.add(contact);
        vm.form = {
          name: '',
          telephone: '',
          email: ''
        };
      }
    }
  });

/*
angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (MathService) {
      this.hello = 'Hello World!';
      this.person = {
        name: 'TesteName',
        lastname: 'TesteSobre'
      };

      this.list = [{
        name: 'TesteName1',
        lastname: 'TesteSobre1'
      },
      {
        name: 'TesteName2',
        lastname: 'TesteSobre2'
      },
      {
        name: 'TesteName3',
        lastname: 'TesteSobre3'
      }];

      this.alertMe = function() {
        alert(this.person.name + ' ' + this.person.lastname);
      };

      // usando a factory
      /*
      this.sum = function(num1, num2) {
        return alert(MathFactory.sum(num1, num2));
      };

      this.sub = function(num1, num2) {
        return alert(MathFactory.sub(num1, num2));
      };
      */
/*
      // usando service
      this.sum = function(num1, num2) {
        return alert(MathService.sumService(num1, num2));
      };

      this.sub = function(num1, num2) {
        return alert(MathService.subService(num1, num2));
      };
    }
  });
*/
