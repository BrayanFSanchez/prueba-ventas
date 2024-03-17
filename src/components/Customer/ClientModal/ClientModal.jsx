import { useState, useEffect } from "react";
import { CustomerTable } from "../CustomersTable/CustomerTable";
import { Pagination } from "../../Pagination/Pagination";

export const ClientModal = () => {
  const [showModal, setShowModal] = useState(false);

  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [clientesPerPage] = useState(8); // Cambia según tus necesidades

  useEffect(() => {
    // Simulación de carga de datos (reemplaza con tu lógica real)
    setLoading(true);
    setTimeout(() => {
      // Datos de ejemplo (reemplaza con tus propios datos)
      const exampleClientes = [
        { id: 1, nombre: "Cliente 1", email: "cliente1@example.com" },
        { id: 3, nombre: "Cliente 3", email: "cliente3@example.com" },
        { id: 4, nombre: "Cliente 4", email: "cliente4@example.com" },
        { id: 5, nombre: "Cliente 5", email: "cliente5@example.com" },
        { id: 6, nombre: "Cliente 6", email: "cliente6@example.com" },
        { id: 7, nombre: "Cliente 7", email: "cliente7@example.com" },
        { id: 8, nombre: "Cliente 8", email: "cliente8@example.com" },
        { id: 9, nombre: "Cliente 9", email: "cliente9@example.com" },
        { id: 10, nombre: "Cliente 10", email: "cliente10@example.com" },
        { id: 11, nombre: "Cliente 11", email: "cliente11@example.com" },
        { id: 12, nombre: "Cliente 12", email: "cliente12@example.com" },
        // ... más clientes ...
      ];
      setClientes(exampleClientes);
      setLoading(false);
    }, 1000); // Simula una carga de 1 segundo
  }, []);
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Ver Clientes
      </button>

      {showModal ? (
        <>
          {showModal ? (
            <>
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                  className="fixed inset-0 w-full h-full bg-black opacity-40"
                  onClick={() => setShowModal(false)}
                />
                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    {/* <div className="mt-3 sm:flex">
                      <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-red-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="mt-2 text-center sm:ml-4 sm:text-left">
                        <h4 className="text-lg font-medium text-gray-800">
                          ¿Eliminar cuenta?
                        </h4>
                        <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <div className="items-center gap-2 mt-3 sm:flex">
                          <button
                            className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                            onClick={() => setShowModal(false)}
                          >
                            Eliminar
                          </button>
                          <button
                            className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                            onClick={() => setShowModal(false)}
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    </div> */}
                    <div className="container mx-auto p-4">
                      <h1 className="text-2xl font-semibold mb-4">
                        Lista de Clientes
                      </h1>
                      <CustomerTable
                        clientes={clientes}
                        loading={loading}
                        currentPage={currentPage}
                        clientesPerPage={clientesPerPage}
                      />
                      <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(
                          clientes.length / clientesPerPage
                        )}
                        onPageChange={(page) => setCurrentPage(page)} // Maneja el cambio de página
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
};
