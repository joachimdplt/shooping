import ItemArray from "./components/Item"
import { itemData } from "./data/itemData"

const App = () => {
  return (
         
         
         <div className="gap-3 grid grid-cols-4 ">
            {
              itemData.length && itemData.map((item, index) => (
                <div>
                  <ItemArray key={index} itemInfos={item} />
                </div>

              ))
            }          
        </div>
  )
}
export default App