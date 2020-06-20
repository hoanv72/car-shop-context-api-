import React, { Component } from 'react';

//first, make a new context 
export const MyContext = React.createContext();

//then, create a provider component


export class MyProvider extends Component {
	constructor(props){
		super(props);
		this.state = {
			dataProduct: [
			{
				id: 1,
				title: 'E250',
				img: 'public/img/car1.jpg',
				price: 10,
				brand: 'Mercedes',
				info: 'this is a good car in middle class ',
				inCart: false,
				count: 1
			},
			{
				id: 2,
				title: 'C250',
				img: 'public/img/car2.jpg',
				price: 10,
				brand: 'Mercedes',
				info: 'this is a good car in middle class ',
				inCart: false,
				count: 1
			},
			{
				id: 3,
				title: 'E250',
				img: 'public/img/car10.jpg',
				price: 10,
				brand: 'Lexus',
				info: 'this is a good car in middle class ',
				inCart: false,
				count: 1
			},
			{
				id: 4,
				title: 'E250',
				img: 'public/img/car4.jpg',
				price: 10,
				brand: 'Mercedes',
				info: 'this is a good car in middle class ',
				inCart: false,
				count: 1
			},
			{
				id: 5,
				title: 'C300 AMG',
				img: 'public/img/car5.jpg',
				price: 10,
				brand: 'Mercedes',
				info: 'this is a good car in middle class ',
				inCart: false,
				count: 1
			},
			{
				id: 6,
				title: '200i',
				img: 'public/img/car6.jpg',
				price: 10,
				brand: 'BMW',
				info: 'this is a good car in middle class ',
				inCart: false,
				count: 1
			},
			{
				id: 7,
				title: 'A7',
				img: 'public/img/car7.jpg',
				price: 10,
				brand: 'Audi',
				info: 'this is a good car in middle class ',
				inCart: false,
				count: 1
			},
			{
				id: 8,
				title: 'Q5',
				img: 'public/img/car8.jpg',
				price: 10,
				brand: 'Audi',
				info: 'this is a good car in middle class ',
				inCart: false,
				count: 1
			},
			{
				id: 9,
				title: 'S90',
				img: 'public/img/car9.jpg',
				price: 10,
				brand: 'Volvo',
				info: 'this is a good car in middle class ',
				inCart: false,
				count: 1
			}
			],
			productDetail: [
			{
				id: 1,
				title: 'E250',
				img: 'public/img/car1.jpg',
				price: 10,
				brand: 'Mercedes',
				info: 'this is a good car in middle class ',
				inCart: false,
				count: 1
			}
			],
			Cart: []
	 }
	}

	getItem = (id) =>{
		const product = this.state.dataProduct.find(product => product.id === id);
		return product;
	}

	handleDetails = (id) => {
		const product = this.getItem(id);
		this.setState(() => {
			return {productDetail : product}
		})
	}
	addToCart = (id) => {
		let tempProduct = [...this.state.dataProduct];
		const index = tempProduct.indexOf(this.getItem(id));
		const product = tempProduct[index];
		product.inCart = true;
		product.count = 1;
		this.setState( ()=>{
			return {dataProduct: tempProduct, Cart: [...this.state.Cart, product]}
		})
	}
	render() {
		return(
			<MyContext.Provider value={{
				...this.state, handleDetails: this.handleDetails, addToCart: this.addToCart
			}} >
				{this.props.children}
			</MyContext.Provider>
		)
	}
}
