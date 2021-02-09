import "./Entete.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import SommairePanier from "./SommairePanier";
import { useState } from "react";

export default function Entete(props) {
  //const etatCacherSommairePanier = useState(true);
  // Array DESTRUCTURING (DÉCOMPOSITION DES TABLEAUX ET OBJETS)

  //************************************************************************* */
  //Avec la décomposition de tableau. c'est plus facile :
  const [cacheSommaire, setCacheSommaire] = useState(true);

  // function basculerSommairePanier() {
  //   setCacheSommaire(cacheSommaire ? false : true);
  // }

  // OU
  // const basculerSommairePanier = function () {
  //   setCacheSommaire(cacheSommaire ? false : true);
  // };

  // OU
  const basculerSommairePanier = () =>
    setCacheSommaire(cacheSommaire ? false : true);

  return (
    <header className="Entete">
      <div>Logo</div>
      <ul className="NavPrincipale">
        <li>Produits</li>
        <li>A propos de nous</li>
        <li>Contactez-nous</li>
      </ul>
      <ul className="navUtil">
        <li>
          <Badge
            onClick={basculerSommairePanier}
            badgeContent="5"
            color="primary"
          >
            <ShoppingCartIcon />
          </Badge>
          <SommairePanier
            cacher={cacheSommaire}
            etatPanier={props.etatPanier}
          />
        </li>
        <li>Mon compte</li>
      </ul>
    </header>
  );
}
