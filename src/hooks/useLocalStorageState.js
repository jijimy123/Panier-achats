import { useEffect, useState } from "react";

/**
 *
 * @param {*} valeurInitiale Valeur quelconque avec laquelle on veut initialiser l'etat
 * @param {string} etiquetteLs Chaine de caractere pour l'etiquette localStorage
 *
 * @returns {array} tableau retourne par useState
 */
export default function useLocalStorageState(valeurInitiale, etiquetteLs) {
  const [etat, setEtat] = useState(
    () => JSON.parse(window.localStorage.getItem(etiquetteLs)) || valeurInitiale
  );

  useEffect(
    () => window.localStorage.setItem(etiquetteLs, JSON.stringify(etat)),
    [etat, etiquetteLs]
  );

  // Retourner l'etat
  return [etat, setEtat];
}
