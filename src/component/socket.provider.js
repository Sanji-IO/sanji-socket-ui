import io from 'socket.io-client';

export const SOCKET_INIT_CONNECT_EVENT = 'sj:ws-init-connect';
const $inject = [];
export class SocketProvider {
  constructor(...injects) {
    SocketProvider.$inject.forEach((item, index) => this[item] = injects[index]);

    this.config = {
      path: '/sanji',
      transportOptions: {
        polling: {
          extraHeaders: { Authorization: '' }
        }
      }
    };

    this.configure = cfg => Object.assign(this.config, cfg);
  }

  $get($rootScope, $timeout, socketFactory) {
    'ngInject';
    const config = this.config;
    let socket;
    let isConnected = false;

    return {
      connect,
      disconnect
    };

    function connect(options = config) {
      if (!isConnected) {
        if (socket) {
          socket.removeAllListeners('connect');
          socket.removeAllListeners('disconnect');
        }
        socket = io.connect(options);
        isConnected = true;
        $timeout(() => {
          $rootScope.$broadcast(SOCKET_INIT_CONNECT_EVENT, socketFactory({ socket }));
        });
        socket.on('disconnect', () => {
          isConnected = false;
        });
      }
    }

    function disconnect() {
      isConnected = false;
    }
  }
}
SocketProvider.$inject = $inject;
