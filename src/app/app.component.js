// @ string
// = two way databinding
// < one way databinding
// & function
angular
  .module('app')
  .component('hero', {
    templateUrl: 'app/hero.html',
    bindings: {
      hero: '<'
    },
    controller: function () {
      this.hero = 'This is a new component from Angular';
    }
  });
