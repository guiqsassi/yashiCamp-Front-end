import {createStore} from 'redux'
import rootReducer from './rootReducer';
import { useDispatch } from 'react-redux';


const store = createStore(rootReducer)

export default store;
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch    