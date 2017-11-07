const _ = require('../index');
const expect = require('chai').expect;

describe('_', function() {
  'use strict';

  it('is an object', function() {
    expect(_).to.be.an('object');
  });
  describe('#identity', function() {
    it('is a function', function() {
      expect(_.identity).to.be.a('function');
    });
  });
  it('Returns empty array for empty array', function() {
    var result = _.identity([]);
    var expected = [];
    expect(expected).to.eql(result);
  });
});
it('Returns undefined for empty string', function() {
  var result = _.identity('');
  var expected = '';
  expect(expected).to.equal(result);
});
it('Returns boolean for boolean input', function() {
  var result = _.identity(true);
  var expected = true;
  expect(expected).to.equal(result);
});
it('Returns NaN for NaN', function() {
  var result = _.identity(NaN);
  var expected = NaN;
  expect(expected).to.eql(result);
});
it('Returns string for string', function() {
  var result = _.identity('hello');
  var expected = 'hello';
  expect(expected).to.equal(result);
});
