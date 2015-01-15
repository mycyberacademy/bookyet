(function(app) {

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('user', {
            url: '/user',
            views: {
                "main": {
                    controller: 'UserController',
                    templateUrl: 'user/user.tpl.html'
                }
            },
            data:{ requireLogin: true }
            //, resolve: {
            //     userData : function (UserService, $state) {

            //         console.log(UserService.getCurrentUser());

            //         if (!UserService.getCurrentUser()) {
            //             $state.go("login");
            //         }
            //         else{
            //             return UserService.getCurrentUser();
            //         }
            //     } 
            // }
        });
    }]);

    app.controller('UserController', ['$scope', 'UserService', function ($scope, UserService) {

        var init = function() {
            $scope.user = UserService.getCurrentUser();
        };

        init();
    }]);

}(angular.module("bookyet.user", [
    'ui.router'
])));