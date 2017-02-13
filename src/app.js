import angular from 'angular';

import { sjSocket } from './component';

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
app.run(($log, sjio) => {
  sjio.connect();
});

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['webapp']);
});
