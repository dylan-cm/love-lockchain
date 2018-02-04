import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import cardFactory from '../ethereum/cardFactory.js';
import { Link } from '../routes';

class LoveLockIndex extends Component {
	// state = {
	// 	cardMessage: ''
	// };

	static async getInitialProps() {
		const locks = await cardFactory.methods.getCreators().call();

		return { locks };
	}

	// async getMessage(address) {
	// 	const cardMessage = await cardFactory.methods.cards(address).call();
	//
	// 	console.log(address);
	// 	console.log(cardMessage);
	//
	// 	return cardMessage;
	// }

	renderLocks() {
		const items = this.props.locks.map(address => {
			// this.setState({ cardMessage: getMessage(address) });

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
					<h3>All The Cards</h3>
					<Link route="/cards/new">
						<a>
							<Button
								floated="right"
								content="Write Your Valentine"
								icon="add circle"
								primary={true}
							/>
						</a>
					</Link>
					{this.renderLocks()}
				</div>
			</Layout>
		);
	}
}

export default LoveLockIndex;
