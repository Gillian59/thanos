//blogs/first_article.tsx
import { Layout } from "../../components/layout"

const first_article: React.FC = ({children}) => {
  return (
    <div>
      <Layout />
      
      <div className="d-flex row">
        <div className="col-8 ml-3">
          <h3>Titan</h3>
  
          <p>Thanos est un Titan, une branche de la race des Éternels (race créée par les Célestes)1 qui quittèrent la Terre il y a plusieurs siècles pour Titan, la lune de Saturne, et qui donna à leur peuple leur nom. Il est le fils du mentor Alars et de Sui-san.</p> 
          <p>Contrairement à son frère Éros, Thanos naît avec un physique ingrat : une peau gris-pourpre et d'une texture semblable à la roche1 et un corps massif. Il passe auprès des autres Titans pour anormal, porteur du mal génétique dit « syndrome du Déviant » et incapable de succéder à son père à la tête du peuple. Ce rôle est octroyé à son frère Éros5.

          Rejeté par les siens1, il trouve une compagne dans un temple souterrain oublié : Dame Mort, qui fut son seul amour et sa seule consolation durant toute son adolescence. Instruit par elle, il acquiert un pouvoir surpassant celui de tous les autres Titans. L’âge venant, il commence à se révolter contre son père, et leurs disputes dégénérèrent en hostilité. À la suite d'une expérience de Thanos, ayant coûté la vie à plusieurs de ses sujets, il est banni de Titan.

          De son aveu même, quelque chose en lui se brisa pendant ces siècles d’exil. Le cœur débordant de haine, il retourne sur Titan et lance une attaque nucléaire sur son propre monde, tuant des milliers de personnes, y compris sa mère, la seule personne qu’il aurait peut-être voulu épargner. Son père et son frère étant dans l’espace lors de l’attaque, ceux-ci échappèrent au massacre. Avec l'aide des Vengeurs, Mentor put repousser Thanos, puis s'attela à reconstruire son monde.

          </p>
        </div>

        <img className="CSSimage" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwmboSLttJjFspB2cmrr0uO3XjHzXff1KGWg&usqp=CAUlyU7x39SQW1tDBFBm98A&usqp=CAU">

        </img>
      </div>
      
    </div>
  )
}

export default first_article;