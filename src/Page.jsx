import Pied2Page from './Pied2Page';
import Entete from "./Entete";
import "./Page.css";

export default function Page() {
  return( 
    <div className="Page">
      <Entete />
      <section className="contenuPrincipal">
        Le contenu principal
      </section>
      <Pied2Page />
    </div>
    );
}
