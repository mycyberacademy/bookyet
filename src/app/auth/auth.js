(function(app) {

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('auth', {
            url: '/auth',
            views: {
                "main": {
                    controller: 'AuthController',
                    controllerAs: 'auth',
                    templateUrl: 'auth/auth.tpl.html'
                }
            },
            data:{ pageTitle: 'Auth' }
        });

        $stateProvider.state('login', {
            url: '/auth/login',
            views: {
                "main": {
                    controller  : 'LoginController',
                    controllerAs: 'login',
                    templateUrl : 'auth/login/login.tpl.html'
                }
            },
            data:{ pageTitle: 'Login' }
        });

        $stateProvider.state('logout', {
            url: '/auth/logout',
            views: {
                "main": {
                    controller  : 'LogoutController',
                    controllerAs: 'logout',
                    templateUrl : 'auth/logout/logout.tpl.html'
                }
            },
            data:{ pageTitle: 'Logout' },
            resolve:{
                logout : function (UserService) {
                    UserService.logout();
                    $emit("login:ended");
                    return false;
                }
            }
        });
        
        $stateProvider.state('register', {
            url: '/auth/register',
            views: {
                "main": {
                    controller  : 'registerController',
                    controllerAs: 'register',
                    templateUrl : 'auth/register/register.tpl.html'
                }
            },
            data:{ pageTitle: 'register' }
            // resolve:{
            //     register : function (UserService) {
            //         UserService.register();
            //         $emit("login:ended");
            //         return false;
            //     }
            // }
        });

    }]);

    app.config(function ($authProvider) {
        
        $authProvider.facebook({
            clientID: '624059410963642',
            appID: '624059410963642'
        }); 

        $authProvider.google({
             clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com',
             redirectUri: 'http://localhost:9000'
            
        }); 


    });

    app.constant('DSP_URL', "http://dsp-vla2devlab.dreamfactory.com");
    app.constant('DSP_API_KEY', "bookyet");

    app.config(function($httpProvider, DSP_API_KEY) {
        $httpProvider.defaults.headers.common['X-DreamFactory-Application-Name'] = DSP_API_KEY;
    });


    app.controller('AuthController', function ($auth, $state) {

        var init = function() {
        };

        this.loginFb = function (provider) {
            $auth.authenticate(provider);
        };
        
        this.loginGoogle = function (provider) {
            $auth.authenticate(provider);
        };
        
        this.loginTwitter = function (provider) {
            $auth.authenticate(provider);
        };
        
        this.loginApp = function () {
            $state.go('login');
        };       
        
        init();
    });

}(angular.module("bookyet.auth", [
    'ui.router',
    'satellizer',
    'ngDreamFactory',
])));