import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';


import NewsItemLarge from '../../components/NewsItemLarge';
import * as actions from './redux/actions';

export class Single extends Component {
  static propTypes = {
    items: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
	componentWillMount = () => {
		const { actions: { fetchItem }, params: { id } } = this.props;
		fetchItem(id);
	}
  render() {
		const { items: { item } } = this.props;
    return (
      <div className="items-single">
				<Link to="/items">Back to List</Link>
				{ item && <NewsItemLarge item={item}/>}
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
)(Single);
