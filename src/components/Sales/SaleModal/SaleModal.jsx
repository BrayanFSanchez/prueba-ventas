import { useState, useEffect } from "react";
import { SaleTable } from "../SaleTable/SaleTable";
import { Pagination } from "../../Pagination/Pagination";

export const SaleModal = () => {
  const [showModal, setShowModal] = useState(false);

  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [ventasPerPage] = useState(8); // Cambia según tus necesidades

  useEffect(() => {
    // Simulación de carga de datos (reemplaza con tu lógica real)
    setLoading(true);
    setTimeout(() => {
      // Datos de ejemplo (reemplaza con tus propios datos)
      const exampleventas = [
        { id: 1, nombre: "venta 1", fecha: "24/3/24" },
        { id: 2, nombre: "venta 2", fecha: "23/3/24" },
        { id: 3, nombre: "venta 3", fecha: "22/3/24" },
        { id: 4, nombre: "venta 4", fecha: "21/3/24" },
        { id: 5, nombre: "venta 5", fecha: "20/3/24" },
        { id: 6, nombre: "venta 6", fecha: "19/3/24" },
        { id: 7, nombre: "venta 7", fecha: "18/3/24" },
        { id: 8, nombre: "venta 8", fecha: "17/3/24" },
        { id: 9, nombre: "venta 9", fecha: "16/3/24" },
        { id: 10, nombre: "venta 10", fecha: "15/3/24" },
        { id: 11, nombre: "venta 11", fecha: "12/3/24" },
        { id: 12, nombre: "venta 12", fecha: "11/3/24" },

        // ... más ventas ...
      ];
      setVentas(exampleventas);
      setLoading(false);
    }, 1000); // Simula una carga de 1 segundo
  }, []);
  return (
    <>
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Ver Ventas
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
                        Ventas recientes
                      </h1>
                      <SaleTable
                        ventas={ventas}
                        loading={loading}
                        currentPage={currentPage}
                        ventasPerPage={ventasPerPage}
                      />
                      <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(ventas.length / ventasPerPage)}
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
