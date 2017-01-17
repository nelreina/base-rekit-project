import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Single } from 'src/features/items/Single';

describe('items/Single', () => {
  it('renders node with correct class name', () => {
    const pageProps = {
      items: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Single {...pageProps} />
    );

    expect(
      renderedComponent.find('.items-single').node
    ).to.exist;
  });
});
