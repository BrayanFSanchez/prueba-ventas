import PropTypes from "prop-types";

export const CustomerTable = ({
  clientes,
  loading,
  currentPage,
  clientesPerPage,
}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const indexOfLastCliente = currentPage * clientesPerPage;
  const indexOfFirstCliente = indexOfLastCliente - clientesPerPage;
  const clientesPaginados = clientes.slice(
    indexOfFirstCliente,
    indexOfLastCliente
  );
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <th className="px-4 py-2 text-start">Nombre</th>
        <th className="px-4 py-2 text-start">Correo</th>
        {/* ... encabezados de la tabla ... */}
        <tbody>
          {clientesPaginados.map((cliente) => (
            <tr key={cliente.id}>
              <td className="border px-4 py-2">{cliente.nombre}</td>
              <td className="border px-4 py-2">{cliente.email}</td>
              {/* ... más celdas según tus necesidades ... */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

CustomerTable.propTypes = {
  clientes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  clientesPerPage: PropTypes.number.isRequired,
};
