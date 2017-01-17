import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import FieldText from '../../components/FieldText';
import FieldEditor from '../../components/FieldEditor';

class ItemForm extends Component {
	handleSubmit = (values) => {
		this.props.save(values);
		this.props.reset();
	}
	render() {
		const { handleSubmit, save } = this.props;
		return (
			<Form onSubmit={handleSubmit(this.handleSubmit)}>
				<Field name="title" placeholder="title" component={FieldText} />
				<Field name="editor" placeholder="Editor" component={FieldEditor} />
				<Button>Save</Button>
			</Form>
		)
	}
}
export default reduxForm({
	form: 'Item'
})(ItemForm);
