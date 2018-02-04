import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
	return (
		<Menu style={{ marginTop: '10px' }}>
			<Link route="/">
				<a className="item">LoveLockChain</a>
			</Link>

			<Menu.Menu position="right">
				<Link route="/mycards">
					<a className="item">My Valentines</a>
				</Link>

				<Link route="/cards/new">
					<a className="item">+ New Valentine</a>
				</Link>
			</Menu.Menu>
		</Menu>
	);
};
