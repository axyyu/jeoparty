import React from 'react';

import './BoardHeader.scss';

class BoardHeader extends React.Component {
	render() {
		return <div className="board-box board-header">{this.props.text}</div>;
	}
}

export default BoardHeader;
