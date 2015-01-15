/**
 * @ngdoc directive
 * @name bookyetApp.directive:school
 * @description
 * # school tag with the scope attributes set
 */
angular.module('bookyet')
.directive('ad', function () {
    return {
        replace : true,            
        scope: {
            seller      : '@',
            phone       : '@',
            email       : '@',
            image       : '@',
            published   : '@',
            description : '@',
            price       : '@',
            status      : '@'
        },
        templateUrl:'book/directives/ad.directive.tpl.html',        
        restrict: 'E',
        link: function(scope, element, attrs) {
            $('.image', element).dimmer({
                on: 'hover'
            }); 

            $('.description', element).css("min-height", "170px");         
        }
    };
})
.directive('bookStatus', function () {
    return {
        replace : true,
        require : 'ngModel',                  
        template:
        [
            '<div class="field"><label for="status">Status</label>',
            '<select id="status" ng-model="ad.status" class="ui selection dropdown">',
                '<option value="poor">Poor</option>',
                '<option value="verygood">Very Good</option>',
                '<option value="good">Good</option>',
            '</select></div>'
        ].join(""),        
        restrict: 'E',
        link: function(scope, element, attrs) {
            $('select.dropdown', element).dropdown(); 
        }
    };
})
.directive('uiFormToggle', function () {
    return {
        replace : true,        
        transclude: true,                          
        template:
        [
            "<div class='inline field'>",
                "<div class='ui toggle checkbox' ng-class='{checked : user.autoLogin}'>",
                    "<input type='checkbox' ng-checked='user.autoLogin' ng-model='user.autoLogin' ng-false-value='false' ng-true-value='true' ng-value='user.autoLogin'/>",
                    "<label ng-transclude> ? </label>{{user.autoLogin}}",
                "</div>",
            "</div>",
        ].join(""),        
        restrict: 'E',
        link: function(scope, element, attrs) {
            $('.ui.checkbox', element).checkbox(); 
        }
    };
});
