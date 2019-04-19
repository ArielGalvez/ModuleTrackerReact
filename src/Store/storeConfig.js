import { createStore } from 'redux';
import rootReducer from './rootReducer';

export default function createAppStore() {
  return createStore(
    rootReducer
  );
}