import { useState } from "react";
function Login() {
  const [message, setMessage] = useState("");

  function handleLogin() {
    setTimeout(() => {
      setMessage("Login successful");
    }, 1000);
  }

  return (
    <>
      <button onClick={handleLogin}>Login</button>

      {message && <p>{message}</p>}
    </>
  );
}
export default Login;
