import { combineReducers } from 'redux';
import CreateStudent from '../View/Student/CreateStudent/reducer';
import CreateTrainer from '../View/Trainer/CreateTrainer/reducer';

const rootReducer = combineReducers({
  CreateStudent,
  CreateTrainer
});

export default rootReducer;