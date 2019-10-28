const SESSION_OK_COUNTER = 5;
const INITIAL_STATE = {
    activeCards: []
};

const flashCardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FLASH_CARD_OK':
            state.activeCards = state.activeCards.map(card => {
                if (card.id === action.payload) {
                    card.okCounter++;
                }
                return card;
            }).filter(card => card.okCounter < SESSION_OK_COUNTER);
            return state;
        default:
            return state
    }
};

export default flashCardReducer;