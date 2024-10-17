import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovilDetallado from "@/components/MovilDetallado";
import Heads from "@/components/Heads";

export default function MejorMovilDe2024() {
  return (
    <>
      <Heads
        titulo="Lo más visto: Mejores móviles 2024, cómo elegir el mejor móvil según tu presupuesto | Nivex - Tecnología y móviles, comparativas y análisis"
        descripcion={`
    Descripción de cómo elegir tu móvil según tu presupuesto, separando por presupuesto los mejores móviles para cada categoría en 2024.
    ${dbMovil.moviles.secciones.map(item => item.titulo).join(', ')}
  `}
      />

      <Header />
      <main>
        <div className="flex flex-col max-w-full h-auto md:items-center md:bg-gradient-to-b md:from-black md:from-5%">
            <div className="relative md:order-2 md:flex md:justify-center">
                <img 
                src="https://i.blogs.es/7418e8/mi10tpro/1366_2000.webp"
                className="w-full h-auto object-cover md:z-10 sm:max-w-5xl sm:rounded-lg"
                />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black pt-24 md:top-0 md:bg-gradient-to-b md:from-black md:hidden"></div>
            </div>
            <div className="bg-black md:order-1 md:bg-transparent md:max-w-[60%]">
            <h1 className="text-white font-extrabold text-2xl mx-5 my-5 md:text-5xl md:my-16">Los mejores móviles de 2024 en relación calidad-precio</h1>
            </div>
        </div>


        <div className="mt-5 px-5 sm:max-w-3xl sm:mx-auto">
            <p className="text-black md:text-lg">
            Hay móviles Android en todos los precios imaginables: desde menos de 200 euros a por encima de los 900 euros, enfocados a publicos distintos. No importa tu presupuesto: si en algo nos ponemos todos de acuerdo es en buscar los móviles que nos dan más de lo que cuestan, aquellos con la mejor relación calidad-precio.
            <br /><br />
            Un año más, buscamos los móviles Android con una mejor relación calidad-precio de este 2024, buscando aquellos terminales que dan de sí el presupuesto para traer la mejor configuración posible a su rango de precio. Incluiremos en nuestra lista los móviles disponibles este año, aunque hayan sido lanzados con anterioridad.
            </p>
            <div className="">
            <MovilDetallado 
                producto="Google Pixel 7a"
                imagen="https://i.blogs.es/cdb3d2/pixel/1366_2000.webp"
                descripcion="El Google Pixel 7a es el móvil más barato de Google en 2024, pero no por ello es un mal móvil. Es un móvil compacto, con un diseño sencillo y elegante, y una cámara que destaca por su calidad. Además, es un móvil con Android puro, lo que garantiza actualizaciones rápidas y un rendimiento fluido."
                productoAmazon="Google Pixel 7a - Smartphone 5G Android Libre con Lente Gran Angular y batería de 24 Horas de duración - Azul Claro"
                precio="379€"
            />
            </div>
        </div>
      </main>
    </>
  );
}

