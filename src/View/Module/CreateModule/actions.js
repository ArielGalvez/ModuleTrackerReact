const actions = {
  ADD_STUDENT: function (payload) {
    return {
      type: 'ADD_STUDENT',
      payload
    }
  },
  ADD_TRAINER: function (payload) {
    return {
      type: 'ADD_TRAINER',
      payload
    }
  },
  UPDATE_MODULE_NAME: function (payload) {
    return {
      type: 'UPDATE_MODULE_NAME',
      payload
    }
  },
  UPDATE_MODULE_ERROR_MESSAGE: function (payload) {
    return {
      type: 'UPDATE_MODULE_ERROR_MESSAGE',
      payload
    }
  },
  CLEAN_MODULE_FORM: function (payload) {
    return {
      type: 'CLEAN_MODULE_FORM',
      payload
    }
  },
  UPDATE_MODULE_TYPE: function (payload) {
    return {
      type: 'UPDATE_MODULE_TYPE',
      payload
    }
  }
}

export default actions;