import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/items/DefaultPage';

describe('items/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const pageProps = {
      items: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...pageProps} />
    );

    expect(
      renderedComponent.find('.items-default-page').node
    ).to.exist;
  });
});
