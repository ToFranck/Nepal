import React from "react";
import Bg2 from "../../components/bg2/Bg2";
import "./Bio.css";
import Pdp from "../../components/pdp/Pdp";

export default function Bio() {
  return (
    <>
      <div className="bio">
        {/* <h1>Biography</h1>
      <p>WORK IN PROGRESS</p> */}
        <div className="bio-container">
          <div className="bio-left">
            <Pdp />
          </div>

          <div className="bio-right">
            <p>
              Il débute sa carrière en 2011, en co-fondant la 75e Session. Avec
              Doums, l'un des membres du collectif L'Entourage, il forme le duo
              2Fingz et dévoile sa première mixtape éponyme cette année-là. Une
              deuxième sort deux ans plus tard. S'en suit de nombreuses
              collaborations et se produit sous le pseudonyme KLM. En 2016,
              Népal participe à l'album à succès Cyborg de Nekfeu, sur le titre
              "Esquimaux". Une collaboration qui participera à sa popularisation
              dans le paysage musical français. Avant sa disparition, il
              projetait de dévoiler son tout premier album, baptisé Adios
              Bahamas, sorti, à titre posthume, en janvier 2020.
            </p>

            <h4>Les rappeurs pleurent la mort de Népal</h4>

            <p>
              Après l'annonce brutale de la mort de Népal à seulement 24 ans et
              la sortie de son album posthume Adios Bahamas, les hommages à cet
              artiste au visage masqué pleuvent sur les réseaux sociaux.
              Plusieurs noms du rap français saluent la mémoire de l'artiste,
              notamment Sneazzy, ou Jeanjass, qui écrivent tous deux "repose en
              paix mon frère", Georgio XX5 qui "n'a pas les mots", ou Roméo
              Elvis qui lui souhaite un "bon voyage". "Le paysage du rap
              français perd aujourd'hui une perle. Artiste polymorphe, c'est
              avec une grande tristesse que nous apprenons le décès du rappeur
              Népal. Une pensée pour ses proches", peut-on enfin lire sur le
              Twitter de la Sacem (Société des auteurs, compositeurs et éditeurs
              de musique).
            </p>
          </div>

        </div>

        <div className="biopart2">
          <h4>
          Népal, artiste au visage masqué
          </h4>

          <p>
          Depuis le début de sa carrière en 2011, Népal a tenu à rester anonyme. Pour cela, le jeune rappeur a toujours dissimulé son visage, sous des capuches, derrière des cagoules ou même, parfois, du maquillage. Même dans ses clips, l'artiste n'apparaissait que de dos ou la tête dans l'ombre. Si l'on connaissait son vrai nom, Clément Di Fiore, Népal aura joué de tous les stratagèmes pour que son visage reste un mystère. Une volonté de préserver son anonymat qui s'illustrait également par sa discrétion dans les médias et même, sur les réseaux sociaux où il ne publiait que très peu de photos ou de messages. Seuls les nombreux artistes avec qui il a collaboré, peut-être, avaient réussi à percer le mystère de Népal et découvert son visage.
          </p>
        </div>
        <Bg2 />
      </div>
    </>
  );
}
