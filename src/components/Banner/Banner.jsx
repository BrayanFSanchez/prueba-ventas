export const Banner = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 p-8 rounded-lg">
      <div>
        <h2 className="text-4xl font-semibold mb-2">¡Oferta especial!</h2>
        <p className="text-3xl mb-4">
          ¡Descuento del <span className="">20%</span> en todos los productos!
        </p>
        <div className="flex text-2xl space-x-4">
          <a href="#" className="hover:text-blue-600">
            Ver catálogo
          </a>
          <a href="#" className="hover:text-blue-600">
            Ofertas del día
          </a>
          <a href="#" className="hover:text-blue-600">
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
};
