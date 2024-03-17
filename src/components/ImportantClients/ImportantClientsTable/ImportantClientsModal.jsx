import PropTypes from "prop-types";

export const ImportantClientsTable = ({
  importantClients,
  loading,
  currentPage,
  importantClientsPerPage,
}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const indexOfLastImportantClient = currentPage * importantClientsPerPage;
  const indexOfFirstImportantClient =
    indexOfLastImportantClient - importantClientsPerPage;
  const ImportantClientsPaginados = importantClients.slice(
    indexOfFirstImportantClient,
    indexOfLastImportantClient
  );
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-start">Nombre</th>
            <th className="px-4 py-2 text-start">Cantidad de Ventas</th>
            <th className="px-4 py-2 text-start">Monto total de ventas</th>
            <th className="px-4 py-2 text-start">Fecha de la última compra</th>
            {/* ... otros encabezados de la tabla ... */}
          </tr>
        </thead>
        <tbody>
          {ImportantClientsPaginados.map((cliente) => (
            <tr key={cliente.id}>
              <td className="border px-4 py-2">{cliente.nombre}</td>
              <td className="border px-4 py-2">{cliente.cantidadVentas}</td>
              <td className="border px-4 py-2">{cliente.montoTotalVentas}</td>
              <td className="border px-4 py-2">{cliente.fechaUltimaCompra}</td>
              {/* ... otras celdas según tus necesidades ... */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ImportantClientsTable.propTypes = {
  importantClients: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  importantClientsPerPage: PropTypes.number.isRequired,
};
