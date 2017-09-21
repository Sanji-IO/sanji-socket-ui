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
    let ioSocket;
    let isConnected = false;
    let mySocket = null;

    return {
      getSocket,
      connect,
      disconnect
    };

    function getSocket() {
      return mySocket;
    }

    function connect(options = config) {
      if (!isConnected) {
        if (ioSocket) {
          ioSocket.removeAllListeners('connect');
          ioSocket.removeAllListeners('disconnect');
        }
        ioSocket = io.connect(options);
        isConnected = true;
        mySocket = socketFactory({ ioSocket });
        $timeout(() => {
          $rootScope.$broadcast(SOCKET_INIT_CONNECT_EVENT, mySocket);
        });
        ioSocket.on('disconnect', () => {
          isConnected = false;
          mySocket = null;
        });
      }
    }

    function disconnect() {
      isConnected = false;
      mySocket = null;
      ioSocket.disconnect();
    }
  }
}
SocketProvider.$inject = $inject;
