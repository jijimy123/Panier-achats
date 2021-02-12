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

  // Acceder à l'état du panier qui est reçu dans les props
  const [panier, setPanier] = props.etatPanier;

  // Calculer le nombre d'articles total du panier
  // Methode 1 : programmtion imperative (moins expressive)
  // const articlesTab = Object.values(panier);
  // let nbArticles = 0;
  // for (let i = 0; i < articlesTab.length; i++) {
  //   nbArticles += articlesTab[i].qte;
  // }

  // Calculer le nombre d'articles total du panier
  // Methode 2 : programmation declarative (plus expressive)
  // [ {prix:19, qt3: 3}, {prix: 26.9, qte: 13}, {prix:254.78, qte: 1} ]
  // const nbArticles = Object.values(panier).reduce(
  //   (accumulateur, eltCourant) => accumulateur + eltCourant.qte,
  //   0
  // );

  /**
   * let h = document.createElement("header");
   * h.setAttribute("class","Entete");
   * h.appendChild()
   */

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
            badgeContent={Object.values(panier).reduce(
              (accumulateur, eltCourant) => accumulateur + eltCourant.qte,
              0
            )}
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
