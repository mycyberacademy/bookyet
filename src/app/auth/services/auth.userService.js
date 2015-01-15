angular.module('bookyet')
  .factory('UserService', function (DreamFactory, localStorageService) {

    var _user = localStorageService.get('user') || false;    

    function _getCurrentUser () {
      return _user;
    }
    function _setCurrentUser (user) {
      _user = user;
      _saveLocalUser(_user);
    }
    function _saveLocalUser (user) {
      _user.id  = '';
      localStorageService.set('user', user );
    }
    function _deleteLocalUser () {
      localStorageService.set('user', undefined );
    }
    function _logout () {
      _setCurrentUser(false);
      _deleteLocalUser();
      return DreamFactory.api.user.logout();
    }
    function _register (user) {
      return DreamFactory.api.user.register({login:user.autoLogin,body:user});
    }
    
    var service = {
      login : function(user) {
        console.log(user);
        user.duration = 0;
        return DreamFactory.api.user.login({body : user});
      },
      getCurrentUser : function() {
        return _getCurrentUser();
      },
      setCurrentUser : function(user) {
        _setCurrentUser(user);
      },
      logout : function () {
        return _logout();
      },
      register : function(user) {
        console.log(user);
        return _register(user);
      }
    };

    return service;
   
  });
