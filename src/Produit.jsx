import BtnAjoutPanier from "./BtnAjoutPanier";
import "./Produit.scss";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export default function Produit({ etatPanier, id, nom, prix }) {
  const [panier, setPanier] = etatPanier;

  // Ajoute l'article au panier
  function ajouterArticle() {
    if (panier[id]) {
      //setPanier();
      panier[id].qte++;
    } else {
      panier[id] = { prix: prix, qte: 1 };
    }

    // Maintenant il faut changer l'état du panier avec setPanier
    // Il faut passer a setPanier un NOUVEL objet (obtenu par clonage)

    setPanier(JSON.parse(JSON.stringify(panier))); // OU setPanier({...panier});
    //const nouveauPanier = Object.assign({}, panier);
    //setPanier(nouveauPanier);
  }

  // Etat du bouton
  let btnTexte = "Ajouter au panier";
  let btnQte = 0;
  let btnCouleurCls = "";
  if (panier[id]) {
    btnTexte = <AddCircleOutlineIcon />;
    btnQte = panier[id].qte;
    btnCouleurCls = "rouge";
  }

  return (
    <li className="Produit">
      <div className="image">
        <img src={"images-produits/" + id + ".webp"} alt={nom} />
      </div>
      <div className="info">
        <h3>{nom}</h3>
        <p className="prix">{prix} $CA</p>
        <BtnAjoutPanier
          onClick={ajouterArticle}
          texte={btnTexte}
          qte={btnQte}
          couleur={btnCouleurCls}
        />
      </div>
    </li>
  );
}
