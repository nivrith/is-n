import {
  isN
} from './../src/index';
import {
  expect
} from 'chai';

describe('isN', () => {

  it('Returns true for `5`', () => {
    expect(isN(5)).to.be.true;
  });

  it('Returns false for `[]`', () => {
    expect(isN([])).to.be.false;
  });

  it('Returns false for `{}`', () => {
    expect(isN({})).to.be.false;
  });

  it(`Returns false for ''`, () => {
    expect(isN('')).to.be.false;
  });

  it('Returns false for `\'starwars\'`', () => {
    expect(isN('starwars')).to.be.false;
  });

  it('Returns true for `-0`', () => {
    expect(isN(-0)).to.be.true;
  });

  it('Returns false for `0`', () => {
    expect(isN(0)).to.be.true;
  });

  it('Returns true for `5/2`', () => {
    expect(isN(0)).to.be.true;
  });

});
