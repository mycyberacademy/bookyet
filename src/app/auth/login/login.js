(function(app) {
    
    app.controller('LoginController', function ($state, $scope, UserService) {
        
        $scope.authenticate = function (user) {
            $scope.errors = [];
            $scope.loading = true;

            console.log("login requested");

            $scope.$on('api:ready', function(e) {
                UserService.login(user).then(function (response) {
                    $scope.loading = false;
                    // console.log($scope);
                    UserService.setCurrentUser(response.data);
                    console.log(UserService.getCurrentUser());
                    $scope.$emit("login:success");
                    $state.go("home");
                }, function (error) {
                    $scope.loading = false;               
                    console.log(error);
                    $scope.errors = error.data.error;
                });
            });                
        };

    });

}(angular.module("bookyet.auth")));