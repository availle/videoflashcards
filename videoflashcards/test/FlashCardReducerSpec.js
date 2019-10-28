import {expect} from 'chai'

import flashCardReducer from '../FlashCardReducer'

describe("FlashCardReducer should", () => {

    it('return a correct initial state', () => {
        expect(flashCardReducer(undefined, {type: ''})).to.deep.equal({activeCards: []})
    });

    it('increase a card\'s okCounter if card-id is equal to payload-id', () => {
        const sampleState = {
            activeCards: [
                {id: 'firstCard', okCounter: 0},
                {id: 'secondCard', okCounter: 0}
            ]
        };

        const stateAfter = flashCardReducer(sampleState, {type: 'FLASH_CARD_OK', payload: 'firstCard'})

        expect(stateAfter).to.deep.equal({
            activeCards: [
                {id: 'firstCard', okCounter: 1},
                {id: 'secondCard', okCounter: 0}
            ]
        })
    });

    it('remove cards from the set if ok counter reaches 5', () => {
        const sampleState = {
            activeCards: [
                {id: 'firstCard', okCounter: 4},
                {id: 'secondCard', okCounter: 0}
            ]
        };
        const stateAfter = flashCardReducer(sampleState, {type: 'FLASH_CARD_OK', payload: 'firstCard'})
        expect(stateAfter).to.deep.equal({
            activeCards: [
                {id: 'secondCard', okCounter: 0}
            ]
        })

    })
});