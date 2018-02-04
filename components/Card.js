import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

class VCard extends Component {
	constructor(props) {
		super(props);

		this.state = { msg: '' };

		//const dna = props.query.address;
	}

	render() {
		return (
			<div className="card">
				<img src={require('../img/backgrounds/1.png')} size="small" wrapped />
			</div>
		);
	}
}

export default VCard;
