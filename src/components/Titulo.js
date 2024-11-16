import { fontJet } from "@/utils/fonts";

export default function Titulo({
    texto
}) {
    return (
        <>
            <div
                className={`${fontJet.className} flex justify-center border-b-2 border-t-2 border-gray-100 py-4 mx-5 tracking-wide font-bold`}
            >
                {texto}
            </div>
        </>
    );
}
