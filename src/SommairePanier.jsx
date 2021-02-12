import "./SommairePanier.scss";

export default function SommairePanier(props) {
  const [panier, setPanier] = props.etatPanier;
  const infoPanier = retournerInfoPanier(panier);
  return (
    <div className={"SommairePanier" + (props.cacher ? " cacher" : "")}>
      <span className="nbArticles">
        Articles différents : {infoPanier.nbArticles}
      </span>
      <span className="qteArticles">
        Articles total : {infoPanier.qteArticles}
      </span>
      <span className="sousTotal">Sous-total : {infoPanier.st}</span>
      <span className="tps">TPS : {infoPanier.tps}</span>
      <span className="tvq">TVQ : {infoPanier.tvq}</span>
      <span className="total">Total : {infoPanier.total}</span>
    </div>
  );
}

function retournerInfoPanier(pan) {
  let info = {}; // {nbArticles: 2, qteArticles :18, sousTotal : 1234.56,}
  // Sortir les articles et les mettre dans un tableau
  let article = Object.values(pan);

  // Nombre d'articles différents
  info.nbArticles = article.length;

  // Quantité d'articles totale
  // for (let i = 0; (i = articles.length); i++) {
  //   qteTotal += articles[i].qte;
  // }
  // info.qteArtricles = qteTotal;

  // Meuilleure facon :
  info.qteArticles = article.reduce(function (valInit, valCourante) {
    return valCourante.qte + valInit;
  }, 0);

  // Sous-total
  let sousTotal = article.reduce(
    (accumulateur, articleCourant) =>
      articleCourant.prix * articleCourant.qte + accumulateur,
    0
  );
  info.st = sousTotal.toFixed(2);

  // TPS
  let tps = sousTotal * 0.05;
  info.tps = tps.toFixed(2);

  // TVQ
  let tvq = sousTotal * 0.09975;
  info.tvq = tvq.toFixed(2);

  // Total
  info.total = (sousTotal + tps + tvq).toFixed(2);

  return info;
}
