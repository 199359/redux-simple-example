

const {createStore} = require('redux')

const initialState = {
    age: 21
}

const myReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type==='ADD'){
        newState.age += action.val
    }
    if(action.type==='SUB'){
        newState.age -= action.val
    }

    return newState // newState działa podobnie jak setState w react
}

const store = createStore(myReducer)

store.subscribe(() => {
    console.log('state changed', JSON.stringify(store.getState()))
})

store.dispatch({type: 'SUB', val: 10})
store.dispatch({type: 'ADD', val: 20})

