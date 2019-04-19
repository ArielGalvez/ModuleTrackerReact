const actions = {
    ADD_STUDENT: function (payload) {
      return {
        type: 'ADD_STUDENT',
        payload
      }
    },
    UPDATE_STUDENT_FORM: function (payload) {
      return {
        type: 'UPDATE_STUDENT_FORM',
        payload
      }
    },
    UPDATE_STUDENT_ERRORMESSAGE: function (payload) {
      return {
        type: 'UPDATE_STUDENT_ERRORMESSAGE',
        payload
      }
    },
    CLEAN_STUDENT_FORM: function (payload) {
      return {
        type: 'CLEAN_STUDENT_FORM',
        payload
      }
    }
  }
  
  export default actions;