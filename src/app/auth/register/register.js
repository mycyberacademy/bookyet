(function(app) {
    
    app.controller('registerController', function ($state, $scope, UserService) {
               
        $scope.registerUser = function(user) {
            console.log(user);
            user.autoLogin = true;
            $scope.errors = [];
            $scope.loading = true;

            console.log("register requested");
            UserService.register(user).then(function (response) {
                $scope.loading = false;
                console.log(response);
                UserService.setCurrentUser(response.data);
                console.log(UserService.getCurrentUser());
                $scope.$emit("login:success");
                $state.go("home");
            }, function (error) {
                $scope.loading = false;               
                console.log(error);
                $scope.errors = error.data.error;
            });
        };

    });

}(angular.module("bookyet.auth")));