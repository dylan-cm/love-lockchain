import React, { Component } from 'react';
import { Form, Button, Input, Message, TextArea } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3.js';
import cardFactory from '../../ethereum/cardFactory.js';
import { Router } from '../../routes';

class CardNew extends Component {
	state = {
		loveLetter: '',
		errorMessage: '',
		loading: false
	};

	onSubmit = async event => {
		event.preventDefault();

		this.setState({ loading: true, errorMessage: '' });

		try {
			const accounts = await web3.eth.getAccounts();
			await cardFactory.methods.createCard(this.state.loveLetter).send({
				from: accounts[0],
				value: web3.utils.toWei('.001', 'ether')
			});

			Router.pushRoute('/');
		} catch (err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ loading: false });
	};

	render() {
		// console.log(this.state.loveLetter);

		return (
			<Layout>
				<h3>Create a Valentine Card</h3>
				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
					<TextArea
						autoHeight
						placeholder="Write Your Love Letter"
						value={this.state.loveLetter}
						onChange={event =>
							this.setState({ loveLetter: event.target.value })
						}
					/>
					<Message error header="Oops" content={this.state.errorMessage} />
					<Button loading={this.state.loading} primary>
						Create!
					</Button>
				</Form>
			</Layout>
		);
	}
}

export default CardNew;
