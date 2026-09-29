import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>

      <input
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      {error && <p>{error}</p>}

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
