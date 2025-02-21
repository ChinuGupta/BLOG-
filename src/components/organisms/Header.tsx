import Headerbuttonmolecules from "../molecules/Headerbuttonmolecules";
import Headermolecules from "../molecules/Headermolecules";
import Logomolecule from "../molecules/Logomolecule";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray">
      <div className="flex-shrink-0">
        <Logomolecule />
      </div>
      <nav className="flex gap-8">
        <Headermolecules />
      </nav>

      <div className="flex gap-4">
      
        <Headerbuttonmolecules />
      </div>
    </header>
  );
}
