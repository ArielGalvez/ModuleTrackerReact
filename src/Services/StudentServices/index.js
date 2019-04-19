import { Component } from 'react';
import httpClient from '../InitServices';

class StudentService extends Component {

  postStudent(student) {
    return httpClient.post('/Students', student);
  }

  getStudents() {
    return httpClient.get('/Students')
  }

  getStudentsUnregistered() {
    return httpClient.get('/Students/Unregistered')
  }
}

export default new StudentService()