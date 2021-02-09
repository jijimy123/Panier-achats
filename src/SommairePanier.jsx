import "./SommairePanier.scss";

export default function SommairePanier(props) {
  return (
    <div className={"SommairePanier" + (props.cacher ? " cacher" : "")}>
      <span className="nbArticles">Articles différents : </span>
      <span className="qteArticles">Articles total : </span>
      <span className="sousTotal">Sous-total : </span>
      <span className="tps">TPS : </span>
      <span className="tvq">TVQ : </span>
      <span className="total">Total : </span>
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
  let sousTotal = article.reduce((i, c) => c.prix * c.qte + i, 0);
}
