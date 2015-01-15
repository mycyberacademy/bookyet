/**
 * @ngdoc directive
 * @name bookyetApp.directive:school
 * @description
 * # school tag with the scope attributes set
 */
angular.module('bookyet')
.directive('book', function () {
    return {
        replace : true,            
        scope: {
            title  : '@',
            image  : '@',
            author : '@',
            isbn10 : '@',
            isbn13 : '@',
            desc   : '@'
        },
        templateUrl:'book/directives/book.directive.tpl.html',        
        restrict: 'E',
        link: function(scope, element, attrs) {
                       
        }
    };
});
