import angular from 'angular';
import 'angular-mocks';

import { sjSocket } from './index';
import { SocketProvider } from './socket.provider';

describe('Provider: socket', () => {
  let sandbox;
  let socketProvider;
  let socketFactory;

  beforeEach(angular.mock.module(sjSocket));

  beforeEach(
    angular.mock.inject(_socketFactory_ => {
      sandbox = sinon.sandbox.create();
      socketFactory = _socketFactory_;
    })
  );

  beforeEach(() => {
    socketProvider = new SocketProvider();
  });

  afterEach(() => sandbox.restore());

  it('#configure(<config>) should extend config', () => {
    let config = {
      path: '/test'
    };
    socketProvider.configure(config);
    socketProvider.config.should.be.eql({
      path: '/test',
      transportOptions: {
        polling: {
          extraHeaders: { Authorization: '' }
        }
      }
    });
  });

  it('#$get(<...injects>) should return socket service instance.', () => {
    let obj;
    const length = socketProvider.$get.length;
    obj = socketProvider.$get[length - 1].call(socketProvider, socketFactory);
    obj.connect.should.be.exist;
    obj.connect.should.be.a('function');
  });
});
