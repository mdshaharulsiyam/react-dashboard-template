import axios from "axios";


const axiosInstance = axios.create({
  baseURL: 'https://redinvoice.com'
})

const useAxiosPublic = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODE0NzFhZTQ5ZGY5MWZlMzJkYTQ1YjVlMTBkNjIwMjI5NTViZmY3YjhlOTBkM2ZhNDQyYmQwZDk3ZTg4YjczMGIxMmI4M2NlYjFhMjM1NzUiLCJpYXQiOjE3MTM0NDE3NDMuNDY5MDQ3MDY5NTQ5NTYwNTQ2ODc1LCJuYmYiOjE3MTM0NDE3NDMuNDY5MDQ4MDIzMjIzODc2OTUzMTI1LCJleHAiOjE3NDQ5Nzc3NDMuNDY3MzgxOTU0MTkzMTE1MjM0Mzc1LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.ApAGQkOJ_NmfU0YqaNxTVMhQbpfgSkxXD9GNYmRE6kyeRWfCrC9v1gMfr4hjP8H6jMjj2OrWL-68I2sWBusIY4-LYCRMyiybw36WI60ReUFQ9U-HsoIOLXkqKGyAogDSdyQBnBAqkNVDXXIk9jg4PuljnGtVgkNybZFLowuhi4KtokwGo2lRWtN_MW1hSbBIThXjZAg9q6k0CSmtzA0Wu1kac4lEGEUvLZMLRy95leDt-SAK8XJBkFUG399Idny707M-mGZnzrk0WdpN_LQN5ANEK8LG9mfv4SOZ8m6OqWbDlVBI1eg8XxUZ-lPpFk3-q66UFJQAuIvOYbD1UXwmYVrgww4RsCfvhpEoINqTB84x6bEEKED3uaSk1qK94yha_RAW57IxVVIUKj0vjDrqrioqEVInOVotAG3-hORxKggdVeRAlGs_XszvyXKAMRhaNns4r0GxReftBBnq4A8TKKEUK5ORbug6sW9GnbY-U7DQjExDEyGgyLX7VTtftToPKSHKJjhAh8XJ818poG0CgHjAlTHZgTYXiRmJJnVNKpomwMSlDqEpU1rUhV14xp1Rnhr6LCQPqD7VcAZM59g1GEiYSPlxRnKwAHNWnNJuGxkkNLgeOI_rdBKvjGuAvnClY_XFezMtQsfmRZvHbJdSxrsDFkYGf8G9kFZWwPuYXUQ';
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  return axiosInstance;
}

export default useAxiosPublic;