import produce from "immer"
const current = {
    value: 0
}
const reducer = produce((draft = current, action) => {
    switch (action.type) {
        case 'increase':
            //Redux 
            // return {...state, value: state.value + 1 }
            draft.value += 1;
            return draft;
        case 'decrease':
            //redux
            // return {...state, value: state.value - 1 }
            draft.value -= 1;
            return draft;
        default:
            return draft
    }
})


export default reducer