import { useState } from "react";
function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {!loggedIn ? (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      ) : (
        <p>Welcome Jay</p>
      )}
    </div>
  );
}

export default Login;
