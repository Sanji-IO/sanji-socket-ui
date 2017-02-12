import io from 'socket.io-client';

const $inject = [];
class SocketProvider {
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
    return {
      connect
    };

    function connect(options = config) {
      const ioSocket = io.connect(Object.assign({}, this.config, options));
      return socketFactory({ ioSocket });
    }
  }
}

SocketProvider.$inject = $inject;
export default SocketProvider;
