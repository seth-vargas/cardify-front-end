/* Common helpful things here */

import useAuth from "./hooks/useAuth";

/* Common form className */

const commonFormClassName = "col-6 p-5 rounded bg-light";

/* gets username from localStorage or context API */

function getUsername() {
  const { auth } = useAuth();
  let username;
  if (localStorage.getItem("user")) {
    username = JSON.parse(localStorage.getItem("user")).username;
  } else if (auth?.user) {
    username = auth.user.username;
  }

  return username;
}

export { commonFormClassName, getUsername };
