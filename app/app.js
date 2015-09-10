import 'angular-material.css';
import './app.scss';

import 'angular';
import 'angular-material';
import 'angular-sanji-window';

import component from './component';

let app = angular.module('webapp', [component]);
app.run(($log, socket) => {
  socket.on('connect', () => {
    $log.info('connected');
  });
});
