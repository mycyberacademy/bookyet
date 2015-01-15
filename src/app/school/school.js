(function(app) {

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('school', {
            url: '/school',
            views: {
                "main": {
                    controller: 'SchoolController',
                    templateUrl: 'school/school.tpl.html'
                }
            },
            data:{ pageTitle: 'School' }
        });
    }]);

    app.controller('SchoolController', function ($scope, $timeout, $state, School) {
        
        $scope.app.purple = "";

        if ($scope.app.selling == null) {
            $state.go("home");
        }

        $scope.schools = School.universities;
        $scope.app.loading = "loading";

        $scope.switchSchool = function (school) {
            console.log("sc");
            $scope.selectedSchool = school;

            $scope.app.red = "red";
            $scope.app.loading = "";
            $scope.app.school = school;

            $timeout(function() {
                $state.go("book");
            }, 500);
        };        
                
    });

}(angular.module("bookyet.school", [
    'ui.router'
])));