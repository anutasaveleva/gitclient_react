import * as actions from './index'

describe('todo actions', () => {
    it('addCounter should create ADD_COUNTER action', () => {
        expect(actions.addCounter('Use Redux')).toEqual({
            type: 'ADD_COUNTER',
            id: 0,
            text: 'Use Redux'
        })
    })
});