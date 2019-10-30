const SESSION_OK_COUNTER = 5;
const INITIAL_STATE = {
    currentCardId: 0,
    activeCards: [
        {
            id: 'bla',
            text: 'text 1',
            media: 'media 1',
            okCounter: 0
        },
        {
            id: 'blubb',
            text: 'text 2',
            media: 'media 2',
            okCounter: 0
        },
        {
            id: 'blergh',
            text: 'text 3',
            media: 'media 3',
            okCounter: 0
        },
        {
            id: 'blurb',
            text: 'text 4',
            media: 'media 4',
            okCounter: 0
        }
    ]
};

const flashCardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FLASH_CARD_OK':
            state.activeCards[action.payload].okCounter++;
            state.activeCards = state.activeCards.filter(card => card.okCounter < SESSION_OK_COUNTER);
            state.currentCardId = Math.floor(Math.random() * state.activeCards.length);
            console.log(state.activeCards.length)
            console.log(state.currentCardId)
            return state;
        default:
            return state
    }
};

export default flashCardReducer;