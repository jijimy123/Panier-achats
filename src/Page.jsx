import Entete from "./Entete";
import Pied2Page from "./Pied2Page";
import ListeProduits from "./ListeProduits";
import "./Page.scss";
import { useState } from "react";

export default function Page() {
  // Exemplede comment je vais stocker les articles dans le panier
  // const testPanier = {
  //   prd001: { prix: 17.99, qte: 3 },
  //   prd002: { prix: 19.95, qte: 1 },
  // };

  const etatPanier = useState({});
  return (
    <div className="Page">
      <Entete etatPanier={etatPanier} />
      <section className="contenuPrincipal">
        <ListeProduits etatPanier={etatPanier} />
      </section>
      <Pied2Page />
    </div>
  );
}
