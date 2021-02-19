import Entete from "./Entete";
import Pied2Page from "./Pied2Page";
import ListeProduits from "./ListeProduits";
import "./Page.scss";
import useLocalStorageState from "./hooks/useLocalStorageState";

export default function Page(props) {
  // On utilise notre hooks personalise pour creer un etat qui sera sauvegarder dans localStorage
  // Cet etat aura comme valeur initiale : {} et l'etiquette localStorage sera : "panier"
  const etatPanier = useLocalStorageState({}, "panier");

  // // Remarquez l'initialisation "paresseuse" (lazy initialization)
  // const etatPanier = useState(() => {
  //   const panierLS = window.localStorage.getItem("panier");
  //   return panierLS !== null ? JSON.parse(panierLS) : {};
  // });
  // const [panier, setPanier] = etatPanier;

  // // Sauvegarder le panier dans localStorage
  // // Comme ce code est un effet secondaire de votre composant
  // // (qui doit etre execute a chaque mutation du panier) la bonne facon de le
  // // coder en repectant la maniere React est d'utiliser un hook specialise  "useEffect"
  // useEffect(
  //   () => window.localStorage.setItem("panier", JSON.stringify(panier)),
  //   [panier]
  // ); // tableau des deps (dependances)
  // ===========================================================================

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
