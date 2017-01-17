import React from 'react'
import { Link } from 'react-router';

const ItemList = ({ list }) => {
	return (
		<div className="ui list">
			{
				list.map((item, idx) =>(
					<div key={idx} className="item">
						<Link to={`/items/page/${item.id}`}>{item.title}</Link>
						<br/>
						{item.short}
					</div>
				))
			}
		</div>
	)
}

export default ItemList
