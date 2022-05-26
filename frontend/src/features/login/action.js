
export const loginToken = (token) => {
    return {
      type: "LOGIN_TOKEN",
      payload: token,
    };
  };