import angular from 'angular';

import { sjSocket, SOCKET_INIT_CONNECT_EVENT } from './component';

const app = angular.module('webapp', [sjSocket]);
app.config(sjioProvider => {
  sjioProvider.configure({
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
app.run(($log, sjio, $rootScope) => {
  const ws = sjio.connect();
  $rootScope.$broadcast(SOCKET_INIT_CONNECT_EVENT, ws);
  ws.on('connect', () => {
    $log.info('connected');
  });
});

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['webapp']);
});
