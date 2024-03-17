import { useState, useEffect } from "react";
import { Pagination } from "../../Pagination/Pagination";
import { ImportantClientsTable } from "../ImportantClientsTable/ImportantClientsModal";

export const ImportantClientsModal = () => {
  const [showModal, setShowModal] = useState(false);

  const [importantClients, setImportantClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [importantClientsPerPage] = useState(8); // Cambia según tus necesidades

  // fechaUltimaCompra

  useEffect(() => {
    // Simulación de carga de datos (reemplaza con tu lógica real)
    setLoading(true);
    setTimeout(() => {
      // Datos de ejemplo (reemplaza con tus propios datos)
      const exampleImportantClients = [
        {
          id: 1,
          nombre: "venta 1",
          cantidadVentas: 100,
          montoTotalVentas: "$10,000",
          fechaUltimaCompra: "2024-03-15",
        },
        {
          id: 2,
          nombre: "venta 2",
          cantidadVentas: 75,
          montoTotalVentas: "$8,500",
          fechaUltimaCompra: "2024-03-14",
        },
        {
          id: 3,
          nombre: "venta 3",
          cantidadVentas: 120,
          montoTotalVentas: "$12,300",
          fechaUltimaCompra: "2024-03-16",
        },
        {
          id: 4,
          nombre: "venta 4",
          cantidadVentas: 50,
          montoTotalVentas: "$6,000",
          fechaUltimaCompra: "2024-03-13",
        },
        {
          id: 5,
          nombre: "venta 5",
          cantidadVentas: 90,
          montoTotalVentas: "$9,200",
          fechaUltimaCompra: "2024-03-17",
        },
        {
          id: 6,
          nombre: "venta 6",
          cantidadVentas: 85,
          montoTotalVentas: "$9,800",
          fechaUltimaCompra: "2024-03-16",
        },
        {
          id: 7,
          nombre: "venta 7",
          cantidadVentas: 110,
          montoTotalVentas: "$11,500",
          fechaUltimaCompra: "2024-03-15",
        },
        {
          id: 8,
          nombre: "venta 8",
          cantidadVentas: 65,
          montoTotalVentas: "$7,600",
          fechaUltimaCompra: "2024-03-14",
        },
        {
          id: 9,
          nombre: "venta 9",
          cantidadVentas: 40,
          montoTotalVentas: "$4,500",
          fechaUltimaCompra: "2024-03-13",
        },
        {
          id: 10,
          nombre: "venta 10",
          cantidadVentas: 150,
          montoTotalVentas: "$15,000",
          fechaUltimaCompra: "2024-03-17",
        },
      ];
      setImportantClients(exampleImportantClients);
      setLoading(false);
    }, 1000); // Simula una carga de 1 segundo
  }, []);
  return (
    <>
      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Ver Clientes más importantes
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
                    <div className="container mx-auto p-4">
                      <h1 className="text-2xl font-semibold mb-4">
                        Lista de clientes más importantes
                      </h1>
                      <ImportantClientsTable
                        importantClients={importantClients}
                        loading={loading}
                        currentPage={currentPage}
                        importantClientsPerPage={importantClientsPerPage}
                      />
                      <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(
                          importantClients.length / importantClientsPerPage
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
