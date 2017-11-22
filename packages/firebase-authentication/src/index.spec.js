import { h } from 'preact';
import { mount } from 'enzyme';
import Component from './index';

describe('FirebaseAuthentication', () => {
  it('Should render', done => {
    const wrapper = <Component email/>;
    console.log('wrapper', wrapper);
    expect(wrapper).toEqual();
  });
});
