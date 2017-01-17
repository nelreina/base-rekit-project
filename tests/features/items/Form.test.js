import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Form } from 'src/features/items/Form';

describe('items/Form', () => {
  it('renders node with correct class name', () => {
    const pageProps = {
      items: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Form {...pageProps} />
    );

    expect(
      renderedComponent.find('.items-form').node
    ).to.exist;
  });
});
