const actions = {
    ADD_USER: function (payload) {
        return {
            type: 'ADD_USER',
            payload
          }
    },
    UPDATE_NAME_MODEL: function (payload) {
      return {
        type: 'UPDATE_NAME_MODEL',
        payload
      }
    },
    CLEAN_MODULE_FORM: function (payload) {
      return {
        type: 'CLEAN_MODULE_FORM',
        payload
      }
    }
  }
  
  export default actions;