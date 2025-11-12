export default function UserProfile({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-2">Perfil</h1>
        <p className="text-slate-600">Tela em branco por enquanto.</p>
        <button
          onClick={onLogout}
          className="mt-6 h-10 rounded-md bg-slate-800 hover:bg-slate-700 text-white px-4"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
