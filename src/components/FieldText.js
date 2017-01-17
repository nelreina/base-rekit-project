import React, { PureComponent, PropTypes } from 'react';
import { Form } from 'semantic-ui-react';
import S from 'string';

export default class UiFieldText extends PureComponent {
  static propTypes = {

  };

  render() {
		const { input, placeholder, name, label } = this.props;
		const display = S(placeholder).capitalize().s
    return (
			<Form.Field>
				{ label && <label>{display}</label>}
				<input type="text" placeholder={display} {...input}/>
			</Form.Field>
    );
  }
}
