import angular from 'angular';
import 'angular-mocks';

import {sjSocket} from './index';

describe('Service: socket', function() {
  let socket;
  let sandbox;

  beforeEach(angular.mock.module(sjSocket));

  beforeEach(angular.mock.inject(_socket_ => {
    sandbox = sinon.sandbox.create();
    socket = _socket_;
  }));

  afterEach(() => sandbox.restore());

  it('should return socket instance', function () {
    socket.on.should.be.exist;
    socket.on.should.be.a('function');
  });
});
