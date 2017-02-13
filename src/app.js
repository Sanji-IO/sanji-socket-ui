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
  sjio.connect();
  $rootScope.$on(SOCKET_INIT_CONNECT_EVENT, () => {
    console.log('test');
  });
});

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['webapp']);
});
