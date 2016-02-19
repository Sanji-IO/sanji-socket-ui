import benv from 'benv';
import { expect } from 'chai' ;

let socket;
let socketFactory;
let SocketService;

describe('Service: socket', function() {
  beforeEach(function setupEnvironment(done) {
    benv.setup(function () {
      global.Node = window.Node;
      benv.expose({
        angular: benv.require('../../node_modules/angular/angular.js', 'angular'),
        io: benv.require('../../node_modules/socket.io-client/socket.io.js')
      });
      done();
    });
  });

  beforeEach(function loadCalcModule() {
    // force to load the module from scratch
    delete require.cache[require.resolve('angular-socket-io'), require('./socket.service.js')];
    require('angular-socket-io');
    SocketService = require('./socket.service.js');
  });

  beforeEach(function() {
    let injector = angular.injector(['ng', 'btford.socket-io']);
    socketFactory = injector.get('socketFactory');
    socket = new SocketService(socketFactory);
  });

  afterEach(function destroySyntheticBrowser() {
    benv.teardown();
  });

  it('should start with injected services and return socket instance', function () {
    expect(SocketService.socketFactory).to.be.exist;
    expect(socket.on).to.be.a('function');
  });

  it('should be have a static socketFactory function', function () {
    expect(SocketService.socketFactory).to.be.a('function');
  });

  describe('#socketFactory(<injects>)', function() {
    it('should return a socket instance', function () {
      let obj = SocketService.socketFactory(socketFactory);
      expect(obj.on).to.be.a('function');
      expect(obj.addListener).to.be.a('function');
      expect(obj.once).to.be.a('function');
      expect(obj.emit).to.be.a('function');
      expect(obj.removeListener).to.be.a('function');
      expect(obj.removeAllListeners).to.be.a('function');
      expect(obj.disconnect).to.be.a('function');
      expect(obj.connect).to.be.a('function');
      expect(obj.forward).to.be.a('function');
    });
  });
});
