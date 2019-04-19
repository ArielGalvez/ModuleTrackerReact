import { Component } from 'react';
import httpClient from '../InitServices';

class ModuleService extends Component {

  postModule(newModule) {
    return httpClient.post('/Modules', newModule);
  }

  getModuleTypes() {
      return httpClient.get('/ModuleTypes');
  }
}

export default new ModuleService()