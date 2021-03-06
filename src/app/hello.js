angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (ContactFactory) {
      var vm = this;
      var id = 0;

      vm.hero = 'New contact';
      vm.heroList = 'List a contact';
      vm.list = [];

      vm.form = {
        index: 0,
        name: '',
        telephone: '',
        email: ''
      };

      vm.add = add;
      vm.edit = edit;
      vm.remove = remove;

      (function () {
        vm.list = ContactFactory.list();
        return vm.list;
      })();

      function add(contact) {
        if (!contact) {
          console.log('You must need a valid contact');
          return;
        }

        if (contact.id) {
          clean();
          ContactFactory.edit(contact);
          return;
        }

        contact.id = id + 1;

        clean();
        ContactFactory.add(contact);
      }

      function edit(contact) {
        if (!contact) {
          console.log('You must need a valid contact');
          return;
        }

        vm.form.name = contact.name;
        vm.form.telephone = contact.telephone;
        vm.form.email = contact.email;
        vm.form.id = contact.id;
      }

      function remove(contact) {
        if (!contact) {
          console.log('You must need a valid contact');
          return;
        }

        return ContactFactory.remove(contact);
      }

      function clean() {
        vm.form = {
          id: 0,
          name: '',
          telephone: '',
          email: ''
        };
        return vm.form;
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
