angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function () {
      this.hello = 'Hello World!';
      this.person = {
        name: 'TesteName',
        lastname: 'TesteSobre'
      };

      this.alertMe = function() {
        alert(this.person.name + ' ' + this.person.lastname);
      }
    }
  });
