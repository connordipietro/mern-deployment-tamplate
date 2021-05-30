import axios from "axios";

export const GET_TEST_DATA = "GET_TEST_DATA";

export function getTestData() {
  return axios.get(`/test-data`)
  .then(response => {
    return {
      type: GET_TEST_DATA,
      payload: response
    }; 
  })
  .catch(error => {
    alert('Error');
  });
}; 

export function generateTestData() {
  axios.get(`/generate-test-data`)
};
