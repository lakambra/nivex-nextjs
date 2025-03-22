import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { fontJet } from "@/utils/fonts";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathToImage = isMenuOpen
    ? "/images/maths7-svgrepo-com.svg"
    : "/images/burger1-svgrepo-com.svg";

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header>
      <div className="flex flew-row my-5 md:items-center">
        <button className="px-5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Image src={pathToImage} alt="My SVG" width={18} height={18} />
        </button>
        <Link href="/" aria-label="Nivex">
          <img
            src="/images/foto3.png"
            className="w-28"
            alt="Logo de la web Nivex"
          />
        </Link>
        <nav className="hidden md:flex">
          <Link
            href="/categorias/moviles"
            className={`${fontJet.className} ml-8 text-sm font-bold inline-block relative text-black no-underline transition-all duration-[0.3s] ease-in-out after:content-normal after:absolute after:w-full after:h-0.5 after:bg-black after:origin-bottom-right after:transition-transform after:duration-[0.25s] after:ease-[ease-out] after:scale-x-0 after:left-0 after:bottom-0 hover:after:origin-bottom-left hover:after:scale-x-100`}
          >
            MÓVILES
          </Link>
          <Link
            href="/categorias/televisiones"
            className={`${fontJet.className} ml-8 text-sm font-bold inline-block relative text-black no-underline transition-all duration-[0.3s] ease-in-out after:content-normal after:absolute after:w-full after:h-0.5 after:bg-black after:origin-bottom-right after:transition-transform after:duration-[0.25s] after:ease-[ease-out] after:scale-x-0 after:left-0 after:bottom-0 hover:after:origin-bottom-left hover:after:scale-x-100`}
          >
            TELEVISIONES
          </Link>
          <Link
            href="/categorias/tablets"
            className={`${fontJet.className} ml-8 text-sm font-bold inline-block relative text-black no-underline transition-all duration-[0.3s] ease-in-out after:content-normal after:absolute after:w-full after:h-0.5 after:bg-black after:origin-bottom-right after:transition-transform after:duration-[0.25s] after:ease-[ease-out] after:scale-x-0 after:left-0 after:bottom-0 hover:after:origin-bottom-left hover:after:scale-x-100`}
          >
            TABLETS
          </Link>

          <Link
            href="/categorias/auriculares"
            className={`${fontJet.className} ml-8 text-sm font-bold inline-block relative text-black no-underline transition-all duration-[0.3s] ease-in-out after:content-normal after:absolute after:w-full after:h-0.5 after:bg-black after:origin-bottom-right after:transition-transform after:duration-[0.25s] after:ease-[ease-out] after:scale-x-0 after:left-0 after:bottom-0 hover:after:origin-bottom-left hover:after:scale-x-100`}
          >
            AURICULARES
          </Link>

          <Link
            href="/categorias/portatiles"
            className={`${fontJet.className} ml-8 text-sm font-bold inline-block relative text-black no-underline transition-all duration-[0.3s] ease-in-out after:content-normal after:absolute after:w-full after:h-0.5 after:bg-black after:origin-bottom-right after:transition-transform after:duration-[0.25s] after:ease-[ease-out] after:scale-x-0 after:left-0 after:bottom-0 hover:after:origin-bottom-left hover:after:scale-x-100`}
          >
            PORTÁTILES
          </Link>

          <Link
            href="/categorias/wearables"
            className={`${fontJet.className} ml-8 text-sm font-bold inline-block relative text-black no-underline transition-all duration-[0.3s] ease-in-out after:content-normal after:absolute after:w-full after:h-0.5 after:bg-black after:origin-bottom-right after:transition-transform after:duration-[0.25s] after:ease-[ease-out] after:scale-x-0 after:left-0 after:bottom-0 hover:after:origin-bottom-left hover:after:scale-x-100`}
          >
            WEARABLES
          </Link>
        </nav>
      </div>
      <nav
        className={`flex flex-col gap-6 transition-all duration-500 ease-out fixed ${isMenuOpen ? "h-screen bg-white w-full px-5 py-10 z-10" : "h-0"
          }`}
      >
        {isMenuOpen && (
          <>
            <Link
              href="/categorias/moviles"
              className={`${fontJet.className} text-2xl inline-block relative text-black no-underline transition-all duration-[0.3s] ease-in-out after:content-normal after:absolute after:w-full after:h-0.5 after:bg-black after:origin-bottom-right after:transition-transform after:duration-[0.25s] after:ease-[ease-out] after:scale-x-0 after:left-0 after:bottom-0 hover:after:origin-bottom-left hover:after:scale-x-100`}
            >
              MÓVILES
            </Link>
            <Link
              href="/categorias/televisiones"
              className={`${fontJet.className} text-2xl inline-block relative text-black no-underline transition-all duration-[0.3s] ease-in-out after:content-normal after:absolute after:w-full after:h-0.5 after:bg-black after:origin-bottom-right after:transition-transform after:duration-[0.25s] after:ease-[ease-out] after:scale-x-0 after:left-0 after:bottom-0 hover:after:origin-bottom-left hover:after:scale-x-100`}
            >
              TELEVISIONES
            </Link>
            <Link
              href="/categorias/tablets"
              className={`${fontJet.className} text-2xl inline-block relative text-black no-underline transition-all duration-[0.3s] ease-in-out after:content-normal after:absolute after:w-full after:h-0.5 after:bg-black after:origin-bottom-right after:transition-transform after:duration-[0.25s] after:ease-[ease-out] after:scale-x-0 after:left-0 after:bottom-0 hover:after:origin-bottom-left hover:after:scale-x-100`}
            >
              TABLETS
            </Link>

            <Link
              href="/categorias/auriculares"
              className={`${fontJet.className} text-2xl inline-block relative text-black no-underline transition-all duration-[0.3s] ease-in-out after:content-normal after:absolute after:w-full after:h-0.5 after:bg-black after:origin-bottom-right after:transition-transform after:duration-[0.25s] after:ease-[ease-out] after:scale-x-0 after:left-0 after:bottom-0 hover:after:origin-bottom-left hover:after:scale-x-100`}
            >
              AURICULARES
            </Link>

            <Link
              href="/categorias/portatiles"
              className={`${fontJet.className} text-2xl inline-block relative text-black no-underline transition-all duration-[0.3s] ease-in-out after:content-normal after:absolute after:w-full after:h-0.5 after:bg-black after:origin-bottom-right after:transition-transform after:duration-[0.25s] after:ease-[ease-out] after:scale-x-0 after:left-0 after:bottom-0 hover:after:origin-bottom-left hover:after:scale-x-100`}
            >
              PORTÁTILES
            </Link>

            <Link
              href="/categorias/wearables"
              className={`${fontJet.className} text-2xl inline-block relative text-black no-underline transition-all duration-[0.3s] ease-in-out after:content-normal after:absolute after:w-full after:h-0.5 after:bg-black after:origin-bottom-right after:transition-transform after:duration-[0.25s] after:ease-[ease-out] after:scale-x-0 after:left-0 after:bottom-0 hover:after:origin-bottom-left hover:after:scale-x-100`}
            >
              WEARABLES
            </Link>
            <div className="border-t-[1px] border-t-black pt-4">
              SOBRE NIVEX
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
