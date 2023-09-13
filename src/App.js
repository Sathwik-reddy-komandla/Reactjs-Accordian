import Accordion from "./Accordion";
import { accodianData } from "./utils/content";
function App() {
  return (
  <>
   <div className="accordian">
    {accodianData.map((data,index)=>{
      return(

      <Accordion key={index} title={data.sectionTitle} content={data.sectionContent}/>
    
    )
  }
    )}
   </div>
  </>
  );
}

export default App;
