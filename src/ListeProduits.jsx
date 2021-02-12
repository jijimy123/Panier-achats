import "./ListeProduits.scss";
import Produit from "./Produit";
import tabProduits from "./data/produits.json";

export default function ListeProduits(props) {
  return (
    <div className="ListeProduits">
      <h2>Produits disponibles</h2>
      <ul>
        {tabProduits.map((prd) => (
          <Produit
            key={prd.id}
            etatPanier={props.etatPanier}
            id={prd.id}
            nom={prd.nom}
            prix={prd.prix}
          />
        ))}
        {/* <Produit nom="T-shirt bio pour enfants" prix="19.95" id="produit002" /> */}
      </ul>
    </div>
  );
}
