import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import ItemList from './ItemList';

export class DefaultPage extends Component {
	static propTypes = {
		items: PropTypes.object.isRequired,
		actions: PropTypes.object.isRequired,
	};

	componentWillMount = () => {
		const { actions } = this.props;
		actions.fetchList();
	}
	render() {
		const { items: { list } } = this.props;
		return (
			<div className="items-default-page">
				{ list && <ItemList list={list}/>}
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
)(DefaultPage);
