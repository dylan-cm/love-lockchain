import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3.js';
import cardFactory from '../ethereum/cardFactory.js';
import { Link } from '../routes';

class MyIndex extends Component {
	static async getInitialProps() {
		const accounts = await web3.eth.getAccounts();
		const locks = await cardFactory.methods.getUserCards(accounts[0]).call();

		return { locks };
	}

	renderLocks() {
		const items = this.props.locks.map(address => {
			return {
				header: address,
				description: (
					<Link route={`/cards/${address}`}>
						<a>View Card</a>
					</Link>
				),
				fluid: true
			};
		});

		return <Card.Group items={items} />;
	}

	render() {
		return (
			<Layout>
				<div>
					<h3>All My Cards</h3>
					{this.renderLocks()}
				</div>
			</Layout>
		);
	}
}

export default MyIndex;
