myApp.controller('UserController', [
  'UserService',
  '$filter',
  function(UserService, $filter) {
    console.log('UserController created');
    var self = this;
    self.userService = UserService;
  }
]);
