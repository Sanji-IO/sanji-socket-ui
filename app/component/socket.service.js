import io from 'socket.io-client';

const $inject = ['socketFactory'];
class SocketService {
  constructor(socketFactory) {
    let ioSocket = io.connect();

    this.socket = socketFactory({
      ioSocket: ioSocket
    });

    return this.socket;
  }

  static socketFactory(socketFactory) {
    return new SocketService(socketFactory);
  }
}

SocketService.socketFactory.$inject = $inject;

export default SocketService;
