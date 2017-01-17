import React from 'react'
import { Link } from 'react-router';
import { Item } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

import NewsItemSmall from '../../components/NewsItemSmall';

const ItemList = ({ list }) => {
	const linkTo = (id) => {
		console.log(id);
		browserHistory.push('/items/page/' + id);
	};
	return (
		<Item.Group divided >
			{
				list.map((item, idx) =>(
						<NewsItemSmall key={idx} item={item} path="/items/page" />
				))
			}
		</Item.Group>
	)
}

export default ItemList
