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

  $get(socketFactory) {
    'ngInject';
    const config = this.config;
    let isConnected = false;

    return {
      connect
    };

    function connect(options = config) {
      if (!isConnected) {
        const ioSocket = io.connect(Object.assign({}, this.config, options));
        isConnected = true;
        return socketFactory({ ioSocket });
      }
    }
  }
}
SocketProvider.$inject = $inject;
