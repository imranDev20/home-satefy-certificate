import axios from "axios";

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    handleErrors(error);
    return Promise.reject(error);
  }
);

export const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  patch: axios.patch,
};

function getErrorMessage(statusCode) {
  switch (statusCode) {
    case 400:
      return "Bad Request: The server cannot process your request.";
    case 401:
      return "Unauthorized: Please log in to access this resource.";
    case 403:
      return "Forbidden: You do not have permission to access this resource.";
    case 404:
      return "Not Found: The requested resource could not be found.";
    case 500:
      return "Internal Server Error: Something went wrong on the server.";
    default:
      return "An error occurred while processing your request.";
  }
}

function handleErrors(error) {
  const customErrorMessage = getErrorMessage(error.response?.status);
  const newError = new Error(customErrorMessage);
  newError.originalError = error;
  throw newError;
}
