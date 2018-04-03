(function(){
    'use strict';
    
	angular
		.module('gdgAdmin')
		.config(routeConfig)

	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider']
	
	function routeConfig($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home')

        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            controller: 'homeController',
            controllerAs: 'vm',
            ncyBreadcrumb: {
                label: 'Homepage'
            }
		})
		// Eventos state
        .state('eventos', {
            url: '/eventos',
            templateUrl: 'app/eventos/eventos.html',
            controller: 'eventosController',
            controllerAs: 'vm',
            ncyBreadcrumb: {
                label: 'Home'
            }
        })
        .state('form-evento-create', {
            url: '/eventos/create',
            templateUrl: 'app/eventos/evento-form.html',
            controller: 'eventoController',
            controllerAs: 'vm',
            ncyBreadcrumb: {
                label: 'Home'
            }
        })
        .state('form-evento-edit', {
            url: "/eventos/update/:id",
            templateUrl: "app/eventos/evento-form.html",
            controller:"eventoController",
            controllerAs: "vm",
            ncyBreadcrumb: {
                label: 'Home'
            }
		})
		// Patrocinador State
		.state('patrocinador', {
			url: '/patrocinador', 
			templateUrl: 'app/patrocinadores/patrocinador.html', 
			controller: 'patrocinadorController',
			controllerAs: 'vm',
		})
		.state('patrocinador-form', {
			url: '/patrocinador-form', 
			templateUrl: 'app/patrocinador/patrocinador-form.html', 
			controller: 'patrocinadorFormController',
			controllerAs: 'vm',
		})
		.state('patrocinador-edit', {
			url: '/patrocinador-form/:id', 
			templateUrl: 'app/patrocinador/patrocinador-form.html', 
			controller: 'patrocinadorEditController',
			controllerAs: 'vm',
        })
        // Login state
        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'loginController',
            controllerAs: 'vm',
            ncyBreadcrumb: {
                label: 'Home'
            }
        })
        // Logout state
        .state('logout', {
            url: '/logout',
            templateUrl: 'app/logout/logout.html',
            controller: 'logoutController',
            controllerAs: 'vm',
            ncyBreadcrumb: {
                label: 'Home'
            }
        })
	}
}())