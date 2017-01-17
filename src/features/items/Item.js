import React, { PropTypes } from 'react'
import { Item  } from 'semantic-ui-react';
import EditorView from '../../components/EditorView';

const MyItem = ({ item }) => {
	return (
		<Item.Group>
			<Item>
				{/* <Item.Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' /> */}

				<Item.Content>
					<Item.Header as="h1">{item.title}</Item.Header>
					<Item.Meta>
						<span className='stay'>{item.createdAt}</span>
					</Item.Meta>
					<Item.Description>
						<EditorView raw={item.editor}/>
					</Item.Description>
				</Item.Content>
			</Item>
		</Item.Group>
	)
}

export default MyItem
