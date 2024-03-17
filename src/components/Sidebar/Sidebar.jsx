export const Sidebar = () => {
  return (
    <div className="flex justify-center bg-gray-50 h-screen w-1/4">
      <div className="p-4">
        <h1 className="text-3xl  font-semibold mb-4">Menú</h1>
        <ul className="text-2xl space-y-2">
          <li>
            <a href="/" className="hover:text-blue-600">
              Página Principal
            </a>
          </li>
          <li>
            <a href="/clientes" className="hover:text-blue-600">
              Clientes
            </a>
          </li>
          <li>
            <a href="/ventas" className="hover:text-blue-600">
              Ventas
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
