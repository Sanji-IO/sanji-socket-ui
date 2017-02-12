import angular from 'angular';
import 'angular-socket-io';

import SocketProvider from './socket.provider';

const sjSocket = angular.module('sanji.socket', ['btford.socket-io']).provider('sjio', SocketProvider).name;
export { sjSocket };
