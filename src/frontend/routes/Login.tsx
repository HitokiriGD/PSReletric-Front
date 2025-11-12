import { useMemo, useState } from "react";
import TextField from "../components/TextField";

type User = { username: string; password: string; name: string; };
const USERS: User[] = [
  { username: "paulo",  password: "1234", name: "Paulo Souza" },
  { username: "nathan", password: "abcd", name: "Nathan Santos" },
];

export default function Login({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const hostname = useMemo(() => window.location.hostname || "localhost", []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const ok = USERS.find(u => u.username === username && u.password === password);
    if (!ok) {
      setError("Usuário ou senha inválidos.");
      return;
    }
    onSuccess(); 
  }

  function fillMock(i: number) {
    const u = USERS[i];
    setUsername(u.username);
    setPassword(u.password);
    setError(null);
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="rounded-xl bg-white shadow-lg border border-slate-200">
          <div className="p-7">
            {/* topo / logo e título */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="text-2xl">⚡</span>
                <span className="text-xl font-semibold tracking-tight">PSReletric.com</span>
              </div>
              <div className="text-xs text-slate-500">
                Login • Servidor: <span className="font-mono">{hostname}</span>
              </div>
            </div>

            {/* formulário */}
            <form onSubmit={handleSubmit} className="grid gap-4">
              <TextField
                label="Usuário"
                placeholder="paulo ou nathan"
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
                autoComplete="username"
              />
              <TextField
                label="Senha"
                type="password"
                placeholder="••••"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                autoComplete="current-password"
                error={error ?? undefined}
              />

              <button
                type="submit"
                className="h-10 rounded-md bg-red-500 hover:bg-red-600 text-white font-medium transition"
              >
                Entrar
              </button>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <button type="button" onClick={() => fillMock(0)} className="underline underline-offset-4 hover:text-slate-700">
                  Senha: paulo / 1234
                </button>
                <button type="button" onClick={() => fillMock(1)} className="underline underline-offset-4 hover:text-slate-700">
                  Senha: nathan / abcd
                </button>
              </div>
            </form>
          </div>
        </div>

        <p className="text-center text-xs text-slate-500 mt-4">
          PSReletric.com • sessão simulada
        </p>
      </div>
    </div>
  );
}
