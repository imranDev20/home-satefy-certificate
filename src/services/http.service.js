import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add an interceptor for request errors
axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => {
    handleErrors(error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
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
  get: axiosInstance.get,
  post: axiosInstance.post,
  delete: axiosInstance.delete,
  put: axiosInstance.put,
  patch: axiosInstance.patch,
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
