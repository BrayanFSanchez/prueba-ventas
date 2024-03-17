import PropTypes from "prop-types";

export const SaleTable = ({ ventas, loading, currentPage, ventasPerPage }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const indexOfLastVenta = currentPage * ventasPerPage;
  const indexOfFirstVenta = indexOfLastVenta - ventasPerPage;
  const ventasPaginados = ventas.slice(indexOfFirstVenta, indexOfLastVenta);
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <th className="px-4 py-2 text-start">Nombre</th>
        <th className="px-4 py-2 text-start">Fecha</th>
        {/* ... encabezados de la tabla ... */}
        <tbody>
          {ventasPaginados.map((cliente) => (
            <tr key={cliente.id}>
              <td className="border px-4 py-2">{cliente.nombre}</td>
              <td className="border px-4 py-2">{cliente.fecha}</td>
              {/* ... más celdas según tus necesidades ... */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

SaleTable.propTypes = {
  ventas: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  ventasPerPage: PropTypes.number.isRequired,
};
