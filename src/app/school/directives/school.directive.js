/**
 * @ngdoc directive
 * @name bookyetApp.directive:school
 * @description
 * # school tag with the scope attributes set
 */
angular.module('bookyet')
.directive('school', function () {
    return {
        replace : true,            
        scope: {
            name  : '@',
            image : '@',
            desc  : '@'
        },
        templateUrl:'school/directives/school.directive.tpl.html',        
        restrict: 'E',
        link: function(scope, element, attrs) {
                                   
        }
    };
});
