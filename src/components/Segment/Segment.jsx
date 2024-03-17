import { ClientModal } from "../Customer/ClientModal/ClientModal";
import { ImportantClientsModal } from "../ImportantClients/ImportantClientsModal/ImportantClientsModal";
import { SaleModal } from "../Sales/SaleModal/SaleModal";

export const Segment = () => {
  return (
    <div className="flex bg-gray-50 p-4 rounded-lg w-full">
      <div className="container mx-auto md:px-36 xl:px-40">
        <h2 className="text-3xl font-semibold mb-4">Segmento del Contenido</h2>
        <div className="flex space-x-4">
          <ClientModal />

          <SaleModal />

          <ImportantClientsModal />
        </div>
      </div>
    </div>
  );
};
