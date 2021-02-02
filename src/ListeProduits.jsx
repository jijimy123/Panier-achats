import "./ListeProduits.css";
import Produit from "./Produit";
import tabProduits from "./data/produits.json";

export default function ListeProduits(props) {
  return (
    <div className="ListeProduits">
      <h2>Produits disponibles</h2>
      <ul>
        {tabProduits.map((prd) => (
          <Produit id={prd.id} nom={prd.nom} prix={prd.prix} />
        ))}
        {/* <Produit nom="T-shirt bio pour enfants" prix="19.95" id="prd002" /> */}
      </ul>
    </div>
  );
}
