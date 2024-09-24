import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovilDetallado from "@/components/MovilDetallado";
import { JetBrains_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";

const fontLato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const fontJet = JetBrains_Mono({ subsets: ["latin"] });
const fontOswald = Oswald({ subsets: ["latin"] });

export default function MejorMovilDe2024() {
  return (
    <>
      <Header />
      <main className="mt-14">
        <div className={`${fontJet.className} px-5 xl:max-w-5xl xl:mx-auto`}>
          <span className="text-xs font-bold p-[5px] bg-black text-white tracking-wide">
            SHARON LEMCA-VINCERE
          </span>
          <div className="flex flex-row gap-5 mt-2 tracking-wider">
            <span className="text-xs font-bold">SCIENCE</span>
            <span className="text-xs font-bold">JUN 29, 2024 8:08 AM</span>
          </div>
        </div>
        <div className="mt-4 px-5 xl:max-w-5xl xl:mx-auto">
          <h1
            className={`${fontOswald.className} text-3xl font-bold tracking-wide xl:text-5xl`}
          >
            Los mejores móviles de 2024
          </h1>
          <p className="font-bold mt-6 lg:text-lg">
            Hay móviles Android en todos los precios imaginables: desde opciones asequibles a auténticos topes de gama que superan los 1.200 euros. Estos últimos están diseñados para quienes buscan lo mejor de lo mejor, sin importar el precio. Con características avanzadas como cámaras de alta resolución, pantallas de calidad premium y rendimiento de primer nivel, estos dispositivos ofrecen la mejor experiencia tecnológica disponible. Si en algo coincidimos todos, es en que estos móviles representan la cúspide de la innovación y el lujo en el mundo Android.
          </p>
        </div>
        <img
          src="https://i.blogs.es/7418e8/mi10tpro/1366_2000.webp"
          className="mt-10 px-5 xl:max-w-5xl xl:mx-auto"
        />
        <p className="px-5 mt-10 font-bold xl:max-w-5xl xl:mx-auto xl:text-lg">
          Un año más, buscamos los móviles Android con una mejor relación
          calidad-precio de este 2024, buscando aquellos terminales que dan de
          sí el presupuesto para traer la mejor configuración posible a su rango
          de precio. Incluiremos en nuestra lista los móviles disponibles este
          año, aunque hayan sido lanzados con anterioridad.
        </p>
        <div className="px-5 xl:max-w-5xl xl:mx-auto">
          <MovilDetallado
            producto="Samsung Galaxy S24 Ultra"
            imagen="https://m.media-amazon.com/images/I/71-7uaiy9dL.__AC_SX300_SY300_QL70_ML2_.jpg"
            descripcion="El Samsung Galaxy S24 Ultra es el último buque insignia de la marca surcoreana. Con su pantalla Dynamic AMOLED 2x de 6,8 pulgadas, cámara principal de 200 MP y procesador Snapdragon 8 Gen 3, es el móvil ideal para quienes buscan lo mejor en rendimiento y calidad fotográfica. Además, cuenta con una batería de 5000 mAh que garantiza una larga duración."
            productoAmazon="Samsung Galaxy S24 Ultra y Cargador 45W, Teléfono Móvil con IA, Smartphone Android, 12 GB RAM, 256 GB Almacenamiento, Cámara 200MP, S Pen, Batería Larga Duración, Gris Titanium (Versión Española)"
            precio="1.049,00€"
            linkProductoAmazon="https://www.amazon.es/Cargador-Tel%C3%A9fono-Smartphone-Almacenamiento-Duraci%C3%B3n/dp/B0CNQ89WJN/ref=sr_1_2?dib=eyJ2IjoiMSJ9.nGmC3IBx8VTTiTiSkL6nxT76bGa_Dd-7Nfi6WocnsHPMy7AwgJDbd86hh2nDIwMagXVU6UitFjK64EYUxqnUqrsfVscL_pcsyNiNF2joCM0hBQnLWvheqNoSCeWJfXfTFHm6pvgqZISrekKr9mToBnp8Ho3vaZehfzkki4PhtW9tfozyHa7I0n0sl3a_ib0A8d66UGFHqCnrL6_sNLRfOEl_gXmUpuG9BCDkDTY65dZJbjj0HOuCPcKIYBjWzqoE1xQPdkn63Y5PSJGRfyOcxgyg2xRcvGebc4F3Yd6IMSA.3usj3AwV6utKNQsUvzDhnAoT7oXRqnQdNUmXGMdW4J0&dib_tag=se&keywords=s24%2Bultra&qid=1727178168&sr=8-2&ufe=INHOUSE_INSTALLMENTS%3AES_IHI_4M_VF&th=1"
          />

          <MovilDetallado
            producto="iPhone 16 Pro"
            imagen="https://m.media-amazon.com/images/I/61rObEraFTL._AC_SX466_.jpg"
            descripcion="El iPhone 16 Pro sigue la tradición de excelencia de Apple. Con el nuevo procesador A17 Pro y una cámara mejorada, se convierte en una opción sólida para los usuarios de iOS. Su diseño elegante y su potente rendimiento lo convierten en una de las mejores opciones del año."
            productoAmazon="Apple iPhone 16 Pro de 1 TB: Smartphone 5G con Control de Cámara, grabación en 4K a 120 f/s con Dolby Vision y un Gran Salto en autonomía. Compatible con los AirPods; Titanio Color Desierto"
            precio="1.849,00€"
            linkProductoAmazon="https://www.amazon.es/Apple-iPhone-Pro-Smartphone-autonom%C3%ADa/dp/B0DGJGS5VD/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1MJVKXTSZQFKL&dib=eyJ2IjoiMSJ9.iHlRslVU4eKdqQoxn68GXaO5SAX4SncILubJ4XTn7E3SevS79ecct5jROR1fjL7p7Qdxfqc4F_uX3lYNvK4RSbndXGQi4Rvbv-qy4sxerR_YIwvki4GRgTjp2iX8KT08AqNvV5uomlTxJiF3jJGPLuulgfpAUmJOXromHILsyV0TfICSE68ukPwHzEPuvqQ5WAKnEYnQWbdlyY2KlkAyxya8Pn5TpCJDIIANJFRRTl1FStGB_pyEUxbQpZC8TmywRUrMCMOZ0EqjR5p6e7zyk3fq3Uj2Zn1OtnyAXL9e-vk.J-a16oEExYv62NLjPWA3c5q_ocL80Ww4dpuoNAxomPE&dib_tag=se&keywords=iphone+16+pro&qid=1727178246&sprefix=iphone+16+pro%2Caps%2C120&sr=8-5&ufe=app_do%3Aamzn1.fos.c9c98f9a-3c3d-4a23-8b16-67fb58e734de"
          />

          <MovilDetallado
            producto="Google Pixel 9 Pro XL"
            imagen="https://m.media-amazon.com/images/I/51qm+c9rY6L._AC_SX679_.jpg"
            descripcion="El Google Pixel 9 Pro XL destaca por su excelente calidad de pantalla y sonido. Equipado con Android puro y una cámara que compite con los mejores del mercado, es una opción ideal para los amantes de la fotografía y la simplicidad en el sistema operativo."
            productoAmazon="Google Pixel 9 Pro XL - Smartphone Android Desbloqueado con Gemini, Sistema de cámara Trasera Triple, batería con una autonomía de 24 Horas y Pantalla Super Actua de 6,8 - Obsidiana, 128GB"
            precio="1.199,00€"
            linkProductoAmazon="https://www.amazon.es/Google-Pixel-Pro-Smartphone-Desbloqueado/dp/B0D7V17BMQ/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=URMFPCKN7SW1&dib=eyJ2IjoiMSJ9.j1VPDVeXk56hglleJ2Wa7XnG_-1MNX7imUWt8PmZZkdpzj5Akyv1EDdiigdw0HrNOG7jIkT90EWhDrZ0HXsjsdIuUR5Y9Fvo2_okZ8E7bdfaFs0QqfpnGmKClBahJzxsX6rhpCoqpgTY_N2tBspNyB6-RCdQ7D-DEfjZ_oQtREq-RXNNC9fSGUDe8GdMgliXDsCCMsNMRDnBvDYcKdew4OFtumB9itJGRZvDZTNFdvue0zbCGKDc4mjNUALIoPVCdMrRBx4kep2tbMsCW7xSv4z5WHk-s32FFeTOa3vHo2g.MrL6gJOX4reFS5A6E6rZ8iHbpiBQR0Zn2eHzU_89T34&dib_tag=se&keywords=pixel%2B9%2Bpro%2Bxl&qid=1727178319&sprefix=pixel%2B9%2Bpro%2Bxl%2Caps%2C130&sr=8-3&ufe=INHOUSE_INSTALLMENTS%3AES_IHI_4M_AUTOMATED&th=1"
          />

          <MovilDetallado
            producto="Honor Magic6 Pro"
            imagen="https://m.media-amazon.com/images/I/5102LGjw8-L._AC_SX569_.jpg"
            descripcion="El Honor Magic6 Pro ofrece una duración de batería impresionante y un sistema de cámaras que finalmente cumple con las expectativas. Es un móvil equilibrado en rendimiento, fotografía y autonomía, ideal para quienes buscan calidad a un precio razonable."
            productoAmazon="HONOR Magic6 Pro Smartphone 5G 12GB+512GB Teléfono Móvil 6.80 120Hz 50MP Triple Cámara 180MP Cámara Teleobjetivo Qualcomm Snapdragon 8Gen 5500mAh 66W IP68 NFC Dual SIM (Verde)"
            precio="849,00€"
            linkProductoAmazon="https://www.amazon.es/HONOR-Smartphone-Tel%C3%A9fono-Teleobjetivo-Snapdragon/dp/B0D1CGZM6L/ref=sr_1_2?crid=Z0NSPBKG23K2&dib=eyJ2IjoiMSJ9.pRm7TvGcsKyxwFYT_WkFwM6MDOVW5WRl4-239Mk10qJjdV6KYLb_2XlOutom1VeZZAxSKnnn5F1KdYkY06yPBgl-R-7wwlsCh97Ojj2uhOggbNypRmEZUPMaDPYPpybi-CLErY6WfdPZhtITvvThdYhCNCo55H8I97OLesTpcTlXCLGCKDiHqKcEgT8q0m4SBQg-2WnNeM-gEPbDkvjBBEu_s-6F4WRW4_g0tN6liKpqT3-VlV7tr39OFb6NmdN_kFS5J8_5VS278kXAiEgU_Tcg-skGuDchx_M49l-oevU._s06-iFRPzpQIGsFMmoaj3W-qS288nFZ6XqWQaWXCdM&dib_tag=se&keywords=honor+magic+6+pro&qid=1727178424&sprefix=honor%2Caps%2C126&sr=8-2&ufe=app_do%3Aamzn1.fos.5e544547-1f8e-4072-8c08-ed563e39fc7d"
          />

          <MovilDetallado
            producto="Xiaomi 14 Ultra"
            imagen="https://m.media-amazon.com/images/I/51XJHAjKJmL._AC_SX679_.jpg"
            descripcion="El Xiaomi 14 Ultra se destaca como uno de los mejores smartphones del año, con su pantalla AMOLED de 6,8 pulgadas y resolución WQHD+. Equipado con el último procesador Snapdragon 8 Gen 3, ofrece un rendimiento superior. Su sistema de cámaras Leica con un sensor principal de 50 MP lo convierte en una opción ideal para los amantes de la fotografía."
            productoAmazon="Xiaomi 14 Ultra – Smartphone de 16+512 GB, Lentes Leica Summilux, Snapdragon 8 Gen 3, Pantalla AMOLED 6.73'' 120Hz, HyperCharge 90W, Blanco (Versión ES)"
            precio="1.199,90€"
            linkProductoAmazon="https://www.amazon.es/Xiaomi-Ultra-Smartphone-Snapdragon-HyperCharge/dp/B0CP9WXSZC/ref=sr_1_3?crid=1FSF0UQS9QMSD&dib=eyJ2IjoiMSJ9.UyUZanMmX3NMW6DDcKddAMYGnafrXyzvNjVNHwlBpFa6ldjfOXLeKj3dh46_m0nTrU3KJiin6S9Bm9omEz5pzVbH4tO9o0aXYlsl5Lr7DP9jCf0GE50D5jF5mHWiiP_pinhA0bA5EK42Jgg2hWN1toUdRLLnhybdFpbB9gCGSkHY-91RYAuLBfrmVz1V1Hg5uVItw2bMJTXgQbKerwmC79jHDhhQFBCcBNoLzGpa-stk1fYXtAUyeibQwkH6VtIGQ0QgSvRSnYvTFyyhmB_qUZ68KmKKGGScIRrZ9YrmCgg.JZbY80Cp_TRccY3d2BItJujhl14xWeMtvTaUu0K9Bz0&dib_tag=se&keywords=xiaomi+13+ultra&qid=1727178642&refinements=p_36%3A43000-&rnid=1323854031&sprefix=xiaomi+13+ultra%2Caps%2C114&sr=8-3&ufe=INHOUSE_INSTALLMENTS%3AES_IHI_4M_VF"
          />

          <MovilDetallado
            producto="OPPO Find X5 Pro"
            imagen="https://m.media-amazon.com/images/I/914wwsrPVoL._AC_SX569_.jpg"
            descripcion="El OPPO Find X5 Pro es una excelente opción para quienes buscan un móvil con altas prestaciones a un precio competitivo. Su pantalla QHD+ de 6,7 pulgadas y cámaras desarrolladas en colaboración con Hasselblad lo convierten en un digno competidor en la gama alta."
            productoAmazon="Oppo Find X5 Pro 5G - Smartphone 256GB, 12GB RAM, Dual Sim, White"
            precio="1.208,62€"
            linkProductoAmazon="https://www.amazon.es/Oppo-Find-256GB-Ceramic-White/dp/B09TBG1S1Y/ref=sr_1_9?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1X4EK5MUYCFAI&dib=eyJ2IjoiMSJ9.8QIFlFsPRXQRc6iv5uFWqbmwXwZmyuZ8G8mnE2Z_HaWIsdQ6pcLs9idUUrXhpG5KUkZ4OUmrCDctfRMr3KQ7SV4O9ECsvSc5Z_wNNWonaWJWY6WdcSxcYBuZaFVFePzAAtuF8oDTN-9GuyxnRbsgzNFVVlqoFJLLLqsFnnG5hy3qigB7cWemuZeqjJPOUB_VuFz5vPM0uSqFErCn_iRhgbMYiSyQo8jPEMPQ93I1Ihta4CQzUlF65rrlTalmX2rqJzfxitbfW8sOjt_KZCTDjZsPbxyM5WoL0sNbqOusLy0.6qHWnE6Lq296P8X6iLBZkuDWM_HnT3O1-Qvt01ODqg4&dib_tag=se&keywords=oppo+find+x5+pro&qid=1727178789&sprefix=oppo+find+x5+pro%2Caps%2C121&sr=8-9&ufe=app_do%3Aamzn1.fos.c9c98f9a-3c3d-4a23-8b16-67fb58e734de"
          />

        </div>
      </main>
    </>
  );
}
