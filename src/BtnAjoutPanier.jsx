import "./BtnAjoutPanier.scss";
import Badge from "@material-ui/core/Badge";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutlineIcon";
import { useState } from "react";

export default function BtnAjoutPanier(props) {
  //État du badge du bouton
  const [btnQte, setBtnQte] = useState(0);
  const [btnTexte, setBtnTexte] = useState("Ajouter au panier");
  return (
    <Badge badgeContent={btnQte} color="secondary">
      <button
        onClick={() => {
          props.onClick();
          setBtnQte(btnQte + 1);
          setBtnTexte(<AddCircleOutlineIcon />);
          event.target.classList.add("rouge");
        }}
        className="BtnAjoutPanier"
      >
        Ajouter au panier
      </button>
    </Badge>
  );
}
