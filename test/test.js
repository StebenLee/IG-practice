const should = require('chai').should(),
	expect = require('chai').expect(),
	supertest = require('supertest'),
	api = supertest('http://localhost:8000'),
  app = require('../index.js');

var agent = supertest.agent(app);//persist cookie when redirect
describe('GET post tests', function() {
it('should get all the posts ', function(done) {
  api.get('/api/posts')
  .set('Accept', 'application/json')
  .expect(200,done);
});

it('it should 404 Not Found if reply not exists', function(done) {
  api.post('/posts/1234567890aa')
  .set('Accept', 'application/json')
  .expect(404,done);
});

it('it should be an object with keys and values', function(done) {
  api.get('/api/posts?5950798d5921862770c77c5f')
  .set('Accept', 'application/json')
  .expect(200)
  .end(function(err, res) {
  	res.body.should.be.a('array');
  		
  	done();
  });
});

it('post property test', function(done) {
  api.get('/api/posts?5950798d5921862770c77c5f')
  .set('Accept', 'application/json')
  .expect(200)
  .end(function(err, res) {
  	res.body.should.be.a('array');
  	res.body[0].should.have.property("_id");
  	res.body[0].should.have.property("name");
  	res.body[0].should.have.property("description");
  	res.body[0].should.have.property("imagePath");
  	res.body[0].should.have.property("updatedAt");
  	done();
  });
});
});

describe('POST /api/posts, it should return 403', function() {
  it('should add a posts', function(done) {
    api.post('/api/posts')
    .set('Accept', 'application/x-www-form-urlencoded')
    .send({
      name: "花蓮巨蛋",
      description : "",
      imagePath: "http://i.imgur.com/WbCY9gF.png"
    })
    .expect(403)
    .end(function(err, res) {
      done();
    });
 });
 });

describe('PUT /api/posts, it should return 403', function() {
  it('should put a posts', function(done) {
    api.put('/api/posts?5950798d5921862770c77c5f')
    .set('Accept', 'application/x-www-form-urlencoded')
    .send({
      name: "花蓮巨蛋",
      description : "",
      imagePath: "http://i.imgur.com/WbCY9gF.png"
    })
    .expect(403)
    .end(function(err, res) {
      done();
    });
 });
 });

describe('DEL /api/posts, it should return faild', function() {
  it('should del a posts', function(done) {
    api.delete('/api/posts?5950798d5921862770c77c5f')
    .set('Accept', 'application/x-www-form-urlencoded')
    .expect(403)
    .end(function(err, res) {
      done();
    });
 });
 });

describe('Login test /api/login', function() {
  it('should failed  (wrong email)', function(done) {
    api.post('/api/login')
    .set('Accept', 'application/x-www-form-urlencoded')
    .send({
      email: "444556",
      password : "123456"
    })
    .expect(200)
    .end(function(err, res) {
    	res.should.be.json;
    	res.body.should.have.property("success");
    	res.body.success.should.equal(false);
    	res.body.should.have.property("message");
    	res.body.message.should.equal("Authentication failed. User not found.");
      done();
    });
 });

   it('should failed  (wrong password)', function(done) {
    api.post('/api/login')
    .set('Accept', 'application/x-www-form-urlencoded')
    .send({
      email: 'hihihi',
      password : '111'
    })
    .expect(200)
    .end(function(err, res) {
    	res.should.be.json;
    	res.body.should.have.property("success");
    	res.body.success.should.equal(false);
    	res.body.should.have.property("message");
    	res.body.message.should.equal('Authentication failed. Wrong password.');
      done();
    });
 });

      it('should be untoken', function(done) {
    api.post('/api/login')
    .set('Accept', 'application/x-www-form-urlencoded')
    .send({
      email: 'hihihi',
      password : '111'
    })
    .expect(200)
    .end(function(err, res) {
    	res.should.be.json;
    	res.body.should.have.property("success");
    	res.body.success.should.equal(false);
    	res.body.should.have.property("message");
    	res.body.message.should.equal('Authentication failed. Wrong password.');
    	res.body.should.not.have.property("token");
      done();
    });
 });


      it('should login success (have token)', function(done) {
    api.post('/api/login')
    .set('Accept', 'application/x-www-form-urlencoded')
    .send({
      email: 'hihihi',
      password : '123456'
    })
    .expect(200)
    .end(function(err, res) {
    	res.should.be.json;
    	res.body.should.have.property("success");
    	res.body.success.should.equal(true);
    	res.body.should.have.property("message");
    	res.body.message.should.equal('Enjoy your token!');
    	res.body.should.have.property("token");
      done();
    });
 });
 });
