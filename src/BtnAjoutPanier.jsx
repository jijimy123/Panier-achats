import "./BtnAjoutPanier.scss";
import Badge from "@material-ui/core/Badge";
import { useState } from "react";

export default function BtnAjoutPanier({ qte, onClick, couleur, texte }) {
  return (
    <Badge badgeContent={qte} color="secondary">
      <button onClick={onClick} className={`BtnAjoutPanier ${couleur}`}>
        {texte}
      </button>
    </Badge>
  );
}
