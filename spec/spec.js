const _ = require('../index');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('_', function() {
  'use strict';

  it('is an object', function() {
    expect(_).to.be.an('object');
  });
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

describe('#first', function() {
  it('returns first item when given array', function() {
    expect(_.first([1, 2])).to.equal(1);
    expect(_.first('hello')).to.eql('h');
  });
  it('returns an array of first n items when given n as argument', function() {
    expect(_.first([1, 2, 3, 4, 5], 2)).to.eql([1, 2]);
    expect(_.first('hello', 2)).to.eql(['h', 'e']);
  });
  it('works for edge cases', function() {
    expect(_.first(NaN, 2)).to.eql([]);
    expect(_.first(true, 2)).to.eql([]);
    expect(_.first(null, 2)).to.eql(undefined);
    expect(_.first([], 2)).to.eql([]);
  });
});

describe('#last', function() {
  it('returns item when given array', function() {
    expect(_.last([1, 2])).to.equal(2);
    expect(_.last('hello')).to.eql('o');
  });
  it('returns an array of first n items when given n as argument', function() {
    expect(_.last([1, 2, 3, 4, 5], 2)).to.eql([4, 5]);
    expect(_.last('hello', 2)).to.eql(['l', 'o']);
  });
  it('works for edge cases', function() {
    expect(_.last(NaN, 2)).to.eql([]);
    expect(_.last(true, 2)).to.eql([]);
    expect(_.last(null, 2)).to.eql(undefined);
    expect(_.last([], 2)).to.eql([]);
  });
});

describe('#each', function() {
  it('calls the iteratee the correct number of times when passed an array', function() {
    var spy = sinon.spy();
    _.each([1, 2, 3], spy);
    expect(spy.callCount).to.equal(3);
  });
  it('calls the iteratee function with the element, item and list', function() {
    var spy = sinon.spy();
    _.each([1, 2, 3], spy);
    var firstCall = spy.getCall(0);
    var secondCall = spy.getCall(1);
    var thirdCall = spy.getCall(2);
    expect(firstCall.args).to.eql([1, 0, [1, 2, 3]]);
    expect(secondCall.args).to.eql([2, 1, [1, 2, 3]]);
    expect(thirdCall.args).to.eql([3, 2, [1, 2, 3]]);
  });
  it('also works with objects', function() {
    var spy = sinon.spy();
    _.each({ one: 1, two: 2, three: 3 }, spy);
    expect(spy.callCount).to.equal(3);
  });
  it('binds the iteratee to the specified context', function() {
    let spy = sinon.spy();
    _.each([1, 2, 3], spy, [2, 3, 4]);
    expect(spy.thisValues[0]).to.eql([2, 3, 4]);
  });
});
describe('indexOf', function() {
  it('returns a number', function() {
    expect(_.indexOf(NaN, 1)).to.eql(-1);
    expect(_.indexOf(true, 1)).to.eql(-1);
    expect(_.indexOf(null, 1)).to.eql(-1);
    expect(_.indexOf([], 1)).to.eql(-1);
    expect(_.indexOf([1, 2, 3])).to.eql(-1);
  });
  it('Returns index of value in an array', function() {
    var result = _.indexOf([1, 2, 3], 2);
    var expected = 1;
    expect(expected).to.eql(result);
  });
  it('Returns -1 for value not in array', function() {
    var result = _.indexOf([1, 2, 3], 4);
    var expected = -1;
    expect(expected).to.eql(result);
  });
  it('Returns index of value for a string', function() {
    var result = _.indexOf('hello', 'l');
    var expected = 2;
    expect(expected).to.eql(result);
  });
  it('Returns index of value for an input past the given from index', function() {
    var result = _.indexOf('hellohello', 'l', 5);
    var expected = 7;
    expect(expected).to.eql(result);
  });
  it('Returns index of value for an input up to and including the given from index', function() {
    var result = _.indexOf('hellohello', 'l', 3);
    var expected = 3;
    expect(expected).to.eql(result);
  });
});
describe('filter', function() {
  it('Returns an array of all elements in original list/input when no predicate stated', function() {
    expect(_.filter('string')).to.eql(['s', 't', 'r', 'i', 'n', 'g']);
    expect(_.filter([1, 2, 3])).to.eql([1, 2, 3]);
  });
  it('Returns an empty array for invalid input or invalid predicate', function() {
    expect(_.filter(null)).to.eql([]);
    expect(_.filter(NaN)).to.eql([]);
    expect(_.filter(undefined)).to.eql([]);
    expect(_.filter([1, 2, 3], 5)).to.eql([]);
    expect(_.filter([1, 2, 3], 'hello')).to.eql([]);
    expect(_.filter([1, 2, 3], null)).to.eql([1, 2, 3]);
  });
  it('returns original list if function does not return boolean', function() {
    expect(
      _.filter([1, 2, 3], function(letter) {
        return letter + 1;
      })
    ).to.eql([1, 2, 3]);
    expect(
      _.filter('string', function(letter) {
        return letter + 1;
      })
    ).to.eql(['s', 't', 'r', 'i', 'n', 'g']);
  });
  it('returns filtered list if function returns boolean', function() {
    expect(
      _.filter([1, 2, 3], function(number) {
        return number === 1;
      })
    ).to.eql([1]);
    expect(
      _.filter('string', function(letter) {
        return letter === 's';
      })
    ).to.eql(['s']);
    expect(
      _.filter([1, 2, 3, 4, 5, 6], function(number) {
        return number % 2 === 0;
      })
    ).to.eql([2, 4, 6]);
  });
  it('returns array of only the properties when item is an object', function() {
    expect(_.filter({ Fur: 'long', cat: 'John', colour: 'silver' })).to.eql([
      'long',
      'John',
      'silver'
    ]);
    expect(
      _.filter({ Fur: 'long', cat: 'John', colour: 'silver' }, function(prop) {
        return prop === 'long';
      })
    ).to.eql(['long']);
  });
});

describe.only('#reject', function() {
  it('should return an empty array when provided with an invalid data type', function() {
    expect(
      _.reject(123, function(num) {
        return num < 2;
      })
    ).to.eql([]);
    expect(
      _.reject(false, function(bool) {
        return bool === true;
      })
    ).to.eql([]);
  });
  it('should return all values in the list that do not pass the truth test (predicate)', function() {
    expect(
      _.reject([1, 2, 3, 4, 5, 6], function(num) {
        return num % 2 === 0;
      })
    ).to.eql([1, 3, 5]);
    expect(
      _.reject({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }, function(num) {
        return num % 2 !== 0;
      })
    ).to.eql([2, 4, 6]);
    expect(
      _.reject('Northcoders', function(char) {
        return char === 'o';
      })
    ).to.eql(['N', 'r', 't', 'h', 'c', 'd', 'e', 'r', 's']);
  });
  it('should bind the predicate function to the context object if one is given', function() {
    const context = { num: 2 };
    const arr = [];
    const predicate = function() {
      arr.push(context.num);
    };
    _.reject([1, 2, 3], predicate, context);
    expect(arr).to.eql([2, 2, 2]);
  });
});
