import { Search } from "lucide-react"; // Usaremos lucide-react para los iconos

const SearchBar: React.FC = () => {
  return (
    <div className="relative flex items-center w-80">
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-150"
      />
      <Search className="absolute left-3 h-5 w-5 text-gray-400" />
    </div>
  );
};

export default SearchBar;
