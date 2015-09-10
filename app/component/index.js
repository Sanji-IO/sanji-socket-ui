import 'angular-socket-io';

import SocketService from './socket.service';

let app = angular.module('sanji.socket', ['btford.socket-io']);
app.factory('socket', SocketService.socketFactory);
export default app = app.name
