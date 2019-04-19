const actions = {
    ADD_TRAINER: function (payload) {
      return {
        type: 'ADD_TRAINER',
        payload
      }
    },
    UPDATE_TRAINER_FORM: function (payload) {
      return {
        type: 'UPDATE_TRAINER_FORM',
        payload
      }
    },
    UPDATE_TRAINER_ERRORMESSAGE: function (payload) {
      return {
        type: 'UPDATE_TRAINER_ERRORMESSAGE',
        payload
      }
    },
    CLEAN_TRAINER_FORM: function (payload) {
      return {
        type: 'CLEAN_STUDENT_FORM',
        payload
      }
    }
  }
  
  export default actions;