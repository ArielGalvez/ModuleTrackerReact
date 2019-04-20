import { combineReducers } from 'redux';
import CreateStudent from '../View/Student/CreateStudent/reducer';
import CreateTrainer from '../View/Trainer/CreateTrainer/reducer';
import CreateModule from '../View/Module/CreateModule/reducer';


const rootReducer = combineReducers({
  CreateStudent,
  CreateTrainer,
  CreateModule
});

export default rootReducer;