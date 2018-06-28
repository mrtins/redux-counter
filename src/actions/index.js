import * as CounterActions from './actionsTypes';

export const incrementCounter = () => ({type: CounterActions.INCREMENT_COUNTER})
export const decrementCounter = () => ({type: CounterActions.DECREMENT_COUNTER})
export const incrementFiveCounter = () => ({type: CounterActions.INCREMENT_FIVE_COUNTER})
export const resetCounter = () => ({type: CounterActions.RESET_COUNTER})