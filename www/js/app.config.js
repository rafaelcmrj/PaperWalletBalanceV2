paperWalletBalance.config(function($stateProvider, $urlRouterProvider){
    
    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuCtrl'
    });

    $stateProvider.state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html'
            }
        }
    });

    $stateProvider.state('app.wallets', {
        url: '/wallets',
        views: {
            'menuContent': {
                templateUrl: 'templates/wallets.html'
            }
        }
    });
    
});