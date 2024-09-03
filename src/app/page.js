'use client'
import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabeçalho";
import Link from "next/link";
import Pagina from "./components/Pagina";

export default function Home() {
  return (

      <Pagina titulo="Página Inicial">
          <Button variant="primary">Primary</Button>{" "}
          <Cabecalho titulo="Augusto" subtitulo="Agora" />
          <Cabecalho titulo="Frontend" />
          <Cabecalho titulo="Cabeçalho" />
          <Cabecalho titulo="React" />
          <Link href="/fundamentos">Página Fundamentos</Link>
          <br />
        </Pagina>
    
  );
}
