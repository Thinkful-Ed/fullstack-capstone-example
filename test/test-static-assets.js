const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../server');

const should = chai.should();

chai.use(chaiHttp);


describe('Landing page', function() {

  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  it('should return 200 on GET', function() {
    return chai.request(app)
      .get('/')
      .then(function(res) {
        res.should.have.status(200);
        res.should.be.html;
      });
  });
});

describe('foo page', function() {

  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  it('should return 200 on GET', function() {
    return chai.request(app)
      .get('/foo.html')
      .then(function(res) {
        res.should.have.status(200);
        res.should.be.html;
      });
  });
});


describe('bar page', function() {

  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  it('should return 200 on GET', function() {
    return chai.request(app)
      .get('/bar.html')
      .then(function(res) {
        res.should.have.status(200);
        res.should.be.html;
      });
  });
});