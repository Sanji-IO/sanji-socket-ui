import angular from 'angular';

import { sjSocket } from './component';

const app = angular.module('webapp', [sjSocket]);
app.config(socketProvider => {
  socketProvider.configure({
    transportOptions: {
      polling: {
        extraHeaders: {
          Authorization: 'test',
          'X-Custom-Header-For-My-Project': 'my-secret-access-token'
        }
      }
    }
  });
});
app.run(($log, socket) => {
  socket.on('connect', () => {
    $log.info('connected');
  });
});

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['webapp']);
});
