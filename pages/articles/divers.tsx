//blogs/divers.tsx

import { Layout } from "../../components/layout"

const divers: React.FC = ({children}) => {
  return (
    <div>
      <Layout />
      
      <video className="video-fluid z-depth-1 CSSvideo"  controls>
        <source src="/TourEiffel.mp4" type="video/mp4" />
      </video>
      
     
    </div>
  )
}

export default divers;