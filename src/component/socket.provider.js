import io from 'socket.io-client';

const $inject = ['$provide'];
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

  $get($q, socketFactory) {
    'ngInject';
    const config = this.config;
    const deferred = $q.defer();
    let isConnected = false;
    let socket;
    this.$provide.value('socket', deferred.promise);

    return {
      connect
    };

    function connect(options = config) {
      if (!isConnected) {
        const ioSocket = io.connect(Object.assign({}, this.config, options));
        socket = socketFactory({ ioSocket });
        deferred.resolve(socket);
        isConnected = true;
      }
      return socket;
    }
  }
}

SocketProvider.$inject = $inject;
export default SocketProvider;
