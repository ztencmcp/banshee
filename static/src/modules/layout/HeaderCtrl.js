/**
 * Created by Panda on 16/1/13.
 */
/*@ngInject*/
module.exports = function($scope, $state, $translate, Config) {
  $scope.goToAdmin = function() {
    $state.go('banshee.admin.team', {project: '', pattern: '', past: ''},
              {reload: true});
  };

  $scope.includes = function(state) { return $state.includes(state); };

  $scope.changeLanguage = function(key) { console.log($translate.use(key)); };

  $scope.getLanguage = function() { return $translate.use(); };

  $scope.privateDocUrl = null;

  $scope.loadData = function() {
    Config.getPrivateDocUrl().$promise.then(
        function(res) { $scope.privateDocUrl = res.privateDocUrl; });
  };

  $scope.loadData();
};
