const _ = require("../index");
const expect = require("chai").expect;

describe("_", function() {
  "use strict";

  it("is an object", function() {
    expect(_).to.be.an("object");
  });
});
describe("#identity", function() {
  it("is a function", function() {
    expect(_.identity).to.be.a("function");
  });
});
it("Returns empty array for empty array", function() {
  var result = _.identity([]);
  var expected = [];
  expect(expected).to.eql(result);
});
it("Returns undefined for empty string", function() {
  var result = _.identity("");
  var expected = "";
  expect(expected).to.equal(result);
});
it("Returns boolean for boolean input", function() {
  var result = _.identity(true);
  var expected = true;
  expect(expected).to.equal(result);
});
it("Returns NaN for NaN", function() {
  var result = _.identity(NaN);
  var expected = NaN;
  expect(expected).to.eql(result);
});
it("Returns string for string", function() {
  var result = _.identity("hello");
  var expected = "hello";
  expect(expected).to.equal(result);
});

describe("#first", function() {
  it("returns first item when given array", function() {
    expect(_.first([1, 2])).to.equal(1);
    expect(_.first("hello")).to.eql("h");
  });
  it("returns an array of first n items when given n as argument", function() {
    expect(_.first([1, 2, 3, 4, 5], 2)).to.eql([1, 2]);
    expect(_.first("hello", 2)).to.eql(["h", "e"]);
  });
  it("works for edge cases", function() {
    expect(_.first(NaN, 2)).to.eql([]);
    expect(_.first(true, 2)).to.eql([]);
    expect(_.first(null, 2)).to.eql(undefined);
    expect(_.first([], 2)).to.eql([]);
  });
});

describe.only("last", function() {
  it("testing if it is a function", function() {
    expect(typeof _.last).to.equal("function");
  });
  it("returns item when given array", function() {
    expect(_.last([1, 2])).to.equal(2);
    expect(_.last("hello")).to.eql("o");
  });
  it("returns an array of first n items when given n as argument", function() {
    expect(_.last([1, 2, 3, 4, 5], 2)).to.eql([4, 5]);
    expect(_.last("hello", 2)).to.eql(["l", "o"]);
  });
  it("works for edge cases", function() {
    expect(_.last(NaN, 2)).to.eql([]);
    expect(_.last(true, 2)).to.eql([]);
    expect(_.last(null, 2)).to.eql(undefined);
    expect(_.last([], 2)).to.eql([]);
  });
});
