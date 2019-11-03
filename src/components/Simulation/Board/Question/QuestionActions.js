export function closeQuestion(id) {
	return (dispatch, getState) => {
		const state = getState();

		const question = state.question;
		const board = { ...state.simBoard };

		const item = board[question.category_id].filter((obj) => obj.id === question.id);
		item[0].answered = true;

		dispatch(updateBoard({ board }));
		dispatch(hideQuestion());
	};
}

export function updateBoard(payload) {
	return {
		type: 'SIMULATION_SET_CLUES_SUCCESS',
		payload: payload
	};
}

export function hideQuestion() {
	return {
		type: 'SIMULATION_HIDE_QUESTION',
		payload: null
	};
}
