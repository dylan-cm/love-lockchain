import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import CardFactory from '../../ethereum/cardFactory.js';

class CardShow extends Component {
	static async getInitialProps(props) {
		const card = await CardFactory.methods.cards(props.query.address).call();

		// console.log(card);

		return { card };
	}

	render() {
		return (
			<Layout>
				<h1>{this.props.card}</h1>
				<Card />
			</Layout>
		);
	}
}

export default CardShow;
