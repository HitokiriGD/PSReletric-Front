import { useState } from "react";
import Login from "./frontend/routes/Login";
import UserProfile from "./frontend/routes/UserProfile";

export default function App() {
  const [authed, setAuthed] = useState(false);

  return authed ? (
    <UserProfile onLogout={() => setAuthed(false)} />
  ) : (
    <Login onSuccess={() => setAuthed(true)} />
  );
}
