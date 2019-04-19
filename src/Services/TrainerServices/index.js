import { Component } from 'react';
import httpClient from '../InitServices';

class TrainerService extends Component {

  postTrainer(trainer) {
    return httpClient.post('/Trainers', trainer);
  }

  getTrainers() {
    return httpClient.get('/Trainers');
  }
}

export default new TrainerService()