import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import ItemForm from './ItemForm';

export class Form extends Component {
	static propTypes = {
		items: PropTypes.object.isRequired,
		actions: PropTypes.object.isRequired,
	};

	render() {
		const { actions: { createItem } } = this.props;
		return (
			<div className="items-form">
				<ItemForm save={createItem} />
			</div>
		);
	}
}

/* istanbul ignore next */
function mapStateToProps(state) {
	return {
		items: state.items,
	};
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ ...actions }, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);
