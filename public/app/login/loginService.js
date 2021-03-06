(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .service('loginService', loginService)

    loginService.$inject = ['$http', 'config'];

    function loginService($http, config) {
        this.loginUsuario = loginUsuario;

        function loginUsuario(usuario) {
            return $http.post(config.serviceUrl + 'login', usuario);
        }
    }
})();