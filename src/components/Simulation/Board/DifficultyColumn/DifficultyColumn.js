import React from 'react';

import BoardItem from '../BoardItem';

class DifficultyColumn extends React.Component {
	render() {
		let items = this.props.clues.map((obj) => <BoardItem key={obj.id} {...obj} />);
		return <div className="difficulty-column">{items}</div>;
	}
}

export default DifficultyColumn;
