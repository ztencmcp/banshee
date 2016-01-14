/**
 * Created by Panda on 16/1/14.
 */

var app = angular.module('banshee.admin', [])
  /*@ngInject*/
  .config(function ($stateProvider) {

    $stateProvider
      .state('banshee.admin', {
        url: '/admin',
        abstract: true
      })
      .state('banshee.admin.project', {
        url: '/admin',
        templateUrl: 'modules/admin/project/list.html',
        controller: 'AdminProjectListCtrl'
      })
  })

  .controller('AdminProjectListCtrl', require('./AdminProjectListCtrl'));

module.exports = app.name;