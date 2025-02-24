export const registerUser = () => {
  const endpoint = "https://127.0.0.1:8000/api/register";

  fetch(endpoint);
};

export const loginUser = () => {
  const endpoint = "https://127.0.0.1:8000/api/login";
};

export const LogoutUser = () => {
  const endpoint = "https://127.0.0.1:8000/api/logout";
};
