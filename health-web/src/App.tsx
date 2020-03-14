import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CardSickness from "./shared/card-sickness/CardSickness";

function App() {

  const data = [
    {
      name: " A H1N1 humana ",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/B00528-Swine-flu.png/200px-B00528-Swine-flu.png",
      scNotation: "Orthomyxoviridae",
      descrip:
        "El H1N1 ha mutado en diversos subtipos que incluyen la gripe española (extinta en la vida silvestre), la gripe porcina, la gripe aviar y la gripe bovina. La cepa mantiene su circulación después de haber sido reintroducida por la población humana en los años 1970"
    },
    {
      name: " Gripe Aviar ",
      img:
        "https://www.dw.com/image/3477120_404.jpg",
      scNotation: "H5N1",
      descrip:"La gripe aviar alimentó el pánico durante meses. Este temor estaba justificado puesto que la tasa de mortalidad entre los infectados es del 70%. No obstante, el riesgo de ser contagiado con el virus H5N1 es muy bajo. Los seres humanos se infectan sólo por un contacto muy estrecho con aves de corral. La mayoría de los casos ocurren en Asia, ya que hombres y gallinas viven juntos en espacios muy reducidos."
    },
    {
      name: " DENGUE ",
      img:
        "https://www.quo.es/wp-content/uploads/2015/06/SAG_Dengue-Virus_160413_01-1024x576.jpg",
      scNotation: "DEN 1, DEN 2, DEN 3 y DEN 4",
      descrip: "Es un arbovirus de la familia Flaviviridae. Existen por los menos cuatro variedades distintas (DEN 1, DEN 2, DEN 3 y DEN 4). La OMS estima que se producen entre 50 a 100 millones de infecciones al año. Se transmite por vía sanguínea."
    }
  ];

  return (
    
    <div>
      {
        data.map( (dataInfo) => (
          <CardSickness {... dataInfo} />      
        ))
      }      
    </div>

    /** 
      <CardSickness {...data} />    
    */  

  );
}

export default App;
