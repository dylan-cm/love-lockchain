import React, { Component } from 'react';
import Layout from '../../components/Layout';
import cardFactory from '../../ethereum/cardFactory.js';

class CardShow extends Component {
	// static async getInitialProps() {}
	//
	// async renderCard() {
	// 	const card = await cardFactory.methods.getCreators().call();
	//
	// 	return { card };
	// }

	render() {
		return (
			<Layout>
				<h3>Card View</h3>
				{/* <div>{this.renderCard()}</div> */}
			</Layout>
		);
	}
}

export default CardShow;
