export const flashCardOk = flashCardId => (
    {
        type: 'FLASH_CARD_OK',
        payload: flashCardId,
    }
);

export const flashCardNotOk = flashCardId => (
    {
        type: 'FLASH_CARD_NOT_OK',
        payload: flashCardId,
    }
);

export const flashCardTurnedToMedia = () => ({
    type: 'FLASH_CARD_TURNED_TO_MEDIA'
});