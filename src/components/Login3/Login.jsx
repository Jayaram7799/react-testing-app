import { useState } from "react";

useState;
function Login() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleLogin() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setMessage("Login successful");
    }, 1000);
  }

  return (
    <>
      <button onClick={handleLogin}>Login</button>

      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}
    </>
  );
}
export default Login;
