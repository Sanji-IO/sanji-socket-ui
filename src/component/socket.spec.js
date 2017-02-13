import angular from 'angular';
import 'angular-mocks';

import { sjSocket } from './index';
import { SocketProvider } from './socket.provider';

describe('Provider: socket', function() {
  let sandbox;
  let socketProvider;
  let $q;
  let socketFactory;

  beforeEach(angular.mock.module(sjSocket));

  beforeEach(
    angular.mock.inject((_$q_, _socketFactory_) => {
      sandbox = sinon.sandbox.create();
      $q = _$q_;
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
    obj = socketProvider.$get(socketFactory);
    obj.connect.should.be.exist;
    obj.connect.should.be.a('function');
  });
});
