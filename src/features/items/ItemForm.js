import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import { Link, browserHistory } from 'react-router';
import FieldText from '../../components/FieldText';
import FieldEditor from '../../components/FieldEditor';

const listPath = "/items"

class ItemForm extends Component {
	handleSubmit = (values) => {
		this.props.save(values);
		this.props.reset();
		browserHistory.push(listPath);
	}
	render() {
		const { handleSubmit, save } = this.props;
		return (
			<Form onSubmit={handleSubmit(this.handleSubmit)}>
				<Field name="title" placeholder="title" component={FieldText} />
				<Field name="editor" placeholder="Editor" component={FieldEditor} />
				<Button>Save</Button>
				<Link to={listPath}>Cancel</Link>
			</Form>
		)
	}
}
export default reduxForm({
	form: 'Item'
})(ItemForm);
