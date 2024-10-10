import { Lato } from "next/font/google";
import Link from "next/link";
import Head from "next/head";

const fontLato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});

export default function Heads({
    titulo,
    descripcion
    
}) {
    return (
        <Head>
            <title>{titulo}</title>
            <link rel="icon" type="image/png" href="/images/1.png" />
            <meta name="robots" content="index,follow" />
            <meta
                name="google-site-verification"
                content="rDJ6SDzDvNgj_Bq75dweJgoe9o-EWl3cmOhG2NecGNE"
            />
            <meta
                name="description"
                content={descripcion}
            />
        </Head>
    );
}
