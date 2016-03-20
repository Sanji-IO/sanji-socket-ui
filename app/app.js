import angular from 'angular';

import component from './component';

let app = angular.module('webapp', [component]);
app.run(($log, socket) => {
  socket.on('connect', () => {
    $log.info('connected');
  });
});
