import {expect} from 'chai'

import flashCardReducer from '../FlashCardReducer'

describe("FlashCardReducer should", () => {

    it('return a correct initial state', () => {
        expect(flashCardReducer(undefined, {type: ''})).to.deep.equal({
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
        })
    });

    it('increase a card\'s okCounter if card-id is equal to payload-id', () => {
        const sampleState = {
            activeCards: [
                {id: 'firstCard', okCounter: 0},
                {id: 'secondCard', okCounter: 0}
            ]
        };

        const stateAfter = flashCardReducer(sampleState, {type: 'FLASH_CARD_OK', payload: 0})

        expect(stateAfter).to.deep.equal({
            currentCardId: 0,
            activeCards: [
                {id: 'firstCard', okCounter: 1},
                {id: 'secondCard', okCounter: 0}
            ]
        })
    });

    it('remove cards from the set if ok counter reaches 5', () => {
        const sampleState = {
            currentCardId: 0,
            activeCards: [
                {id: 'firstCard', okCounter: 4},
                {id: 'secondCard', okCounter: 0}
            ]
        };
        const stateAfter = flashCardReducer(sampleState, {type: 'FLASH_CARD_OK', payload: 0})
        expect(stateAfter).to.deep.equal({
            currentCardId: 0,
            activeCards: [
                {id: 'secondCard', okCounter: 0}
            ]
        })

    })
});