import React, { PropTypes } from 'react'
import { Item } from 'semantic-ui-react';
import { Link } from 'react-router';
import moment from 'moment';
const NewsItemSmall = ({ item, path }) => {
	return (
			<Item>
				<Item.Image size='small' src={item.cover} />

				<Item.Content>
					<Item.Header as="h1">{item.title}</Item.Header>
					<Item.Meta>
						<span className='stay'>{moment(item.createdAt).format('MMMM DD, YYYY hh:mm')}</span>
					</Item.Meta>
					<Item.Description>
						{item.short}
					</Item.Description>
					<Item.Extra>
						<Link className="ui button" to={`${path}/${item.id}`}>Lesa Mas...</Link>
					</Item.Extra>
				</Item.Content>
			</Item>
	)
}

export default NewsItemSmall
