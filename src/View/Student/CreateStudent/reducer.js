import Validator from '../../../Components/Validator';

const initialState = {
  name: {
    value: '',
    errorMessage: ' '
  },
  patternLastName: {
    value: '',
    errorMessage: ' '
  },
  matternLastName: {
    value: '',
    errorMessage: ' '
  },
  ci: {
    value: '',
    errorMessage: ' '
  },
  email: {
    value: '',
    errorMessage: ' '
  },
  phone: {
    value: '',
    errorMessage: ' '
  },
  academicDegree: {
    value: '',
    errorMessage: ' '
  }
};

function ADD_STUDENT(state, action) {

  return {
    ...state
  };
}

function UPDATE_STUDENT_FORM(state, action) {
  switch (action.payload.key) {
    case 'name':
    {
      let newName = { ...state.name };
      newName.value = action.payload.value;
      
      return {
        ...state,
        name: newName
      };
    }
    case 'Paternal Last name':{
      let newPatternLastName = { ...state.patternLastName };
      newPatternLastName.value = action.payload.value;
      return {
        ...state,
        patternLastName: newPatternLastName
      };
    }

    case 'Maternal Last Name':{
      let newMatternLastName = { ...state.matternLastName };
      newMatternLastName.value = action.payload.value;
      return {
        ...state,
        matternLastName: newMatternLastName
      };
    }

      case 'CI':{
      let newCI = { ...state.ci };
      newCI.value = action.payload.value;
      return {
        ...state,
        ci: newCI
      };
    }

      case 'Email':{
      let newEmail = { ...state.email };
      newEmail.value = action.payload.value;
      return {
        ...state,
        email: newEmail
      };
    }

      case 'Phone':{
      let newPhone = { ...state.phone };
      newPhone.value = action.payload.value;
      return {
        ...state,
        phone: newPhone
      };
    }

    case 'Academic Degree':{
      let newAcademicDegree = { ...state.academicDegree };
      newAcademicDegree.value = action.payload.value;
      return {
        ...state,
        academicDegree: newAcademicDegree
      };
    }

    default:
      return {
        ...state,
      };
  }

}

function UPDATE_STUDENT_ERRORMESSAGE(state, action) {
  switch (action.payload.key) {
    case 'name':
    {
      let newName = { ...state.name };
      newName.errorMessage =  Validator().validateName(newName.value);
      // console.log(newName)
      return {
        ...state,
        name: newName
      };
    }
    case 'Paternal Last name':{
      let newPatternLastName = { ...state.patternLastName };
      newPatternLastName.errorMessage = Validator().validateName(newPatternLastName.value);
      return {
        ...state,
        patternLastName: newPatternLastName
      };
    }

    case 'Maternal Last Name':{
      let newMatternLastName = { ...state.matternLastName };
      newMatternLastName.errorMessage = Validator().validateName(newMatternLastName.value);
      return {
        ...state,
        matternLastName: newMatternLastName
      };
    }

      case 'CI':{
      let newCI = { ...state.ci };
      newCI.errorMessage = Validator().validateCi(newCI.value);
      return {
        ...state,
        ci: newCI
      };
    }

      case 'Email':{
      let newEmail = { ...state.email };
      newEmail.errorMessage = Validator().validateEmail(newEmail.value);
      return {
        ...state,
        email: newEmail
      };
    }

      case 'Phone':{
      let newPhone = { ...state.phone };
      newPhone.errorMessage = Validator().validateTelf(newPhone.value);
      return {
        ...state,
        phone: newPhone
      };
    }

    default:
      return {
        ...state,
      };
  }
}

function CLEAN_STUDENT_FORM(state, action) {
  return { 
    ...state,
    name: initialState.name,
    patternLastName: initialState.patternLastName,
    matternLastName: initialState.matternLastName,
    ci: initialState.ci,
    email: initialState.email,
    phone: initialState.phone,
    academicDegree: initialState.academicDegree
  };
}

export default function CreateStudent(state = initialState, action) {
  switch (action.type) {
    case 'ADD_STUDENT':
      return ADD_STUDENT(state, action);
    case 'UPDATE_STUDENT_FORM':
      return UPDATE_STUDENT_FORM(state, action);
    case 'UPDATE_STUDENT_ERRORMESSAGE':
      return UPDATE_STUDENT_ERRORMESSAGE(state, action);
    case 'CLEAN_STUDENT_FORM':
      return CLEAN_STUDENT_FORM(state, action);
    default:
      return state;
  }
}