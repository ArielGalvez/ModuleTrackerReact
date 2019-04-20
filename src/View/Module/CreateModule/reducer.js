const initialState = {
  moduleTracker: {
    students: [],
    trainers: [],
    moduleName: {
      value: '',
      errorMessage: ' '
    },
    moduleType: ''
  }
};

function ADD_STUDENT(state, action) {
  // let newModuleTracker = Object.assign({}, state.moduleTracker);
  let newModuleTracker = {
    ...state.moduleTracker
  };
  // newModuleTracker.moduleName.value += 'hola mundo';
  if (newModuleTracker.students.includes(action.payload)) {
    let position = newModuleTracker.students.indexOf(action.payload);
    newModuleTracker.students.splice(position, 1);
  } else {
    newModuleTracker.students.push(action.payload);
  }
  // console.log(newModuleTracker);
  return {
    ...state,
    moduleTracker: newModuleTracker
  }
}

function ADD_TRAINER(state, action) {
  let newModuleTracker = Object.assign({}, state.moduleTracker);
  if (newModuleTracker.trainers.includes(action.payload)) {
    let position = newModuleTracker.trainers.indexOf(action.payload);
    newModuleTracker.trainers.splice(position, 1);
  } else {
    newModuleTracker.trainers.push(action.payload);
  }
  return {
    ...state,
    moduleTracker: newModuleTracker
  }
}

function UPDATE_MODULE_NAME(state, action) {
  // let newModuleName = Object.assign({}, ...state.moduleTracker.moduleName);
  // console.log(action.payload, newModuleName)
  // newModuleName.value = action.payload.value;
  let newModuleTracker = Object.assign({}, state.moduleTracker);
  newModuleTracker.moduleName.value = action.payload.value;
  return {
    ...state,
    moduleTracker: newModuleTracker,
  };
}

function UPDATE_MODULE_ERROR_MESSAGE(state, action) {
  let newModuleName = {
    ...state.moduleName
  };
  newModuleName.errorMessage = action.payload.errorMessage;
  return {
    ...state,
    moduleName: newModuleName
  };
}

function UPDATE_MODULE_TYPE(state, action) {
  return {
    ...state,
    moduleType: action.payload// no es mejor enviarle un id?
  };
}

function CLEAN_MODULE_FORM(state, action) {
  return {
    ...state,
    moduleTracker: initialState.moduleTracker,
  }
}


export default function CreateModule(state = initialState, action) {
  switch (action.type) {
    case 'ADD_STUDENT':
      return ADD_STUDENT(state, action);
    case 'ADD_TRAINER':
      return ADD_TRAINER(state, action);
    case 'UPDATE_MODULE_NAME':
      return UPDATE_MODULE_NAME(state, action);
    case 'UPDATE_MODULE_NAME':
      return UPDATE_MODULE_ERROR_MESSAGE(state, action)
    case 'UPDATE_MODULE_ERROR_MESSAGE':
      return CLEAN_MODULE_FORM(state, action);
    case 'UPDATE_MODULE_TYPE':
      return UPDATE_MODULE_TYPE(state, action);
    default:
      return state;
  }
}