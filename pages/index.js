import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';

class LoveLockIndex extends Component {
	static async getInitialProps() {
		const locks = ['1', '2', '3'];
		//await lovelocks.methods.getCreators().call();

		return { locks };
	}

	renderLocks() {
		const items = this.props.locks.map(address => {
			return {
				header: address,
				description: <a>View Card</a>,
				fluid: true
			};
		});

		return <Card.Group items={items} />;
	}

	render() {
		return (
			<div>
				<h3>All The Cards</h3>
				<Button
					floated="right"
					content="Write Your Valentine"
					icon="add circle"
					primary={true}
				/>
				{this.renderLocks()}
			</div>
		);
	}
}

export default LoveLockIndex;
