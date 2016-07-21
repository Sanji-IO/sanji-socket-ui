import angular from 'angular';

import {sjSocket} from './component';

const app = angular.module('webapp', [sjSocket]);
app.run(($log, socket) => {
  socket.on('connect', () => {
    $log.info('connected');
  });
});

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['webapp']);
});
