import actions from "./actions";

const initialState = {
  module : {
    students: [],
    trainers: [],
    nameModule: {
      value: '',
      errorMessage: ' '
    },
  }
};

function ADD_USER(state, action) {
  let users = Object.assign({}, ...state.module);
  if (users[actions.payload.key].contains(actions.payload.value)) {
    var position = users[actions.payload.key].indexOf(actions.payload.value);
    users[actions.payload.key].splice(position, 1);
  }
  else {
    users[actions.payload.key].push(actions.payload.value);
  }
  return {
    ...state,
    module: users
  }
}

function UPDATE_NAME_MODEL(state, action) {
  let newNameModel = Object.assign({}, ...state.module.nameModule);
  newNameModel.value = action.payload.value;
  return {
    ...state,
    nameModule: newNameModel,
  };
}

function CLEAN_MODULE_FORM(state, action) {
  return {
    ...state,
    module: initialState.module,
  }
}


export default function CreateStudent(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return ADD_USER(state, action);
    case 'UPDATE_NAME_MODEL':
      return UPDATE_NAME_MODEL(state, action);
    case 'CLEAN_MODULE_FORM':
      return CLEAN_MODULE_FORM(state, action);
    default:
      return state;
  }
}