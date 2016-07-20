import angular from 'angular';
import 'angular-socket-io';

import SocketService from './socket.service';

const sjSocket = angular.module('sanji.socket', ['btford.socket-io'])
  .factory('socket', SocketService.socketFactory)
  .name;
export {sjSocket};
