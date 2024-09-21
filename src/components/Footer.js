import { JetBrains_Mono } from "next/font/google";

const fontJet = JetBrains_Mono({ subsets: ["latin"] });

export default function Header() {

  return (
    <footer>
        <p>&copy; 2024 Blog de Tecnología | Todos los derechos reservados</p>
    </footer>
  );
}
