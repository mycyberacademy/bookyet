(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });
    
    app.config(function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('bookyet');
    });



    app.constant('DEFAULT_IMAGE', "assets/img/book.png");   
   

    app.run(function ($rootScope, $state, UserService) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            var requireLogin = toState.data.requireLogin;

            if (requireLogin && !UserService.getCurrentUser()) {
                event.preventDefault();
                $state.go("auth");
            }
        });
    });

    app.controller('AppController', function ($scope, $timeout, UserService) {               
        $scope.app = {
            red:"", purple:"", 
            selling : null, 
            selectedSchool: null, 
            school: null,
            hasUser : false
        };

        $scope.currentUser = UserService.getCurrentUser();

        $scope.$on("login:success",function () {
            // alert("Login");
            $scope.currentUser = UserService.getCurrentUser();            
        });
        
        $scope.$watch("currentUser", function(newValue, oldValue) {
            $scope.app.hasUser = !!newValue;
        });

        $scope.logout = function () {
            var is = UserService.logout();
            $scope.currentUser = UserService.getCurrentUser();            
        };

    });

}(angular.module("bookyet", [
    'bookyet.home',    
    'bookyet.school',
    'bookyet.book',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
    // 'satellizer',
    'bookyet.auth',
    'bookyet.user',
    'LocalStorageModule',
])));
