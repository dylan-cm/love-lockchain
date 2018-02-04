import React, { Component } from 'react';
import { Form, Button, Input, Message, TextArea } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3.js';

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
			await lovelocks.methods.createCard(this.state.loveLetter).send({
				from: accounts[0]
			});
		} catch (err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ loading: false });
	};

	render() {
		return (
			<Layout>
				<h3>Create a Valentine Card</h3>

				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
					{/* <Form.Field>
						<label>Write Your Love Letter</label>
						<Input
							value={this.state.loveLetter}
							onChange={event =>
								this.setState({ loveLetter: event.target.value })
							}
						/>
					</Form.Field> */}

					<TextArea autoHeight placeholder="Try adding multiple lines" />
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
