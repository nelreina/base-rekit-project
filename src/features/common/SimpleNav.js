/*
 * This is a very simple navigation tree for testing purpose.
 * It groups URLs by features.
*/

import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';

export default class SimpleNav extends PureComponent {
	static propTypes = {
		routes: PropTypes.array.isRequired,
	};

	renderLinks(items, basePath) {
		return (
			<div className="ui list">
				{
					items.reduce((prev, item) => {

						let path;
						if (/^\//.test(item.path)) {
							path = item.path;
						} else if (basePath === '/') {
							path = `/${item.path}`;
						} else {
							path = `${basePath}/${item.path}`;
						}
						if (!/Default/.test(item.name) && !/\:|^\+/.test(item.path)) {
							prev.push(<div className="item" key={path}><Link to={path}>{item.name || item.path}</Link></div>);
						}
						if (item.childRoutes && item.childRoutes.length ) {
							prev.push(<div className="item" key={`${path}_wrapper`}>{this.renderLinks(item.childRoutes, path)}</div>);
						}
						return prev;
					}, [])
				}
			</div>
		);
	}

	render() {
		return (
			<div className="common-simple-nav">
				{this.renderLinks(this.props.routes[0].childRoutes, '')}
			</div>
		);
	}
}
