//blogs/second_article.tsx

import { Layout } from "../../components/layout"

const second_article: React.FC = ({children}) => {
  return (
    <div>
      <Layout />
      
      <div className="d-flex row">
        <div className="col-8 ml-3">
          <h3>Pouvoirs</h3>
  
          <p> Thanos est un mutant capable de synthétiser l’énergie cosmique dans un certain nombre d'effets (comme tous les Éternels de la Terre et Mentor, mais pas par ceux nés sur Titan). Il est de loin le plus puissant des Éternels de Titan1.</p>
          <p> Thanos est doté d’une immense force physique. 
              On ne connait pas clairement les limites de sa force, celle-ci n'ayant pas été mesurée avec précision1. 
              Cependant, il a montré qu'il était capable de tenir tête simultanément à Thor et la Chose, et ce pendant une durée prolongée1. Il est donc probable qu'il possède une force de classe 100 à l'échelle Marvel, ce qui lui permet de soulever (ou d'exercer une pression équivalente à) 100 tonnes, voire plus1.
              Il est quasiment invulnérable. Par ailleurs, il peut manipuler l’énergie cosmique à sa guise pour créer des boucliers de force, mais aussi pour projeter de puissantes rafales d'énergie de ses yeux ou de ses mains. On l'a aussi vu manipuler la matière.
              Son esprit est invulnérable à toute forme d’attaque psychique ; il a aussi démontré posséder des capacités télépathiques et télékinésiques.
              Grâce à la science et à la sorcellerie, Thanos a accru ses pouvoirs.
              La Mort, en lui refusant l'entrée dans son royaume l’a rendu immortel.
              Le plus meurtrier de ses pouvoirs reste son esprit, voué à l'annihilation de toute vie. 
              D’une intelligence surhumaine, il est craint du cosmos entier.
              Il possède des ressources phénoménales et a accès à un vaste armement de pointe.</p>
        </div>
         <img 
          className="CSSimage" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU6JRBiOd_KUWAI39qnUDQqA4-CL1-L3hKdQ&usqp=CAU">
            
        </img>
      </div>
     
    </div>
  )
}

export default second_article;