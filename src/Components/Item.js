import React, { Component } from 'react';
import {MyContext} from './MyProvider';

export class Item extends Component {
	render() {
		const { id, title, img, price, brand, info, inCart } = this.props.product;
		return(
		<div className="card">
			<img src={img} className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title"> {brand} {title} </h5>
				<p className="card-text"> {info}</p>
				<MyContext.Consumer>
				{(value) =>{
					return <a href="#" className="btn btn-primary" onClick={() => {value.addToCart(id)}} >  {inCart === true ? "Đã Mua" : "Mua Hàng"} </a>
				}}
				
				</MyContext.Consumer>
			</div>
		</div>

		);
	}
}

export default Item