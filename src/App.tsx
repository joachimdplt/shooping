import ItemArray from "./components/Item"
import SidebarNavigation from "./components/SideNavigation"
import { itemData } from "./data/itemData"

const App = () => {

  

  return (

    <div className="flex flex-col items-center mb-4">
        <SidebarNavigation />
      <div className="gap-3 items-center grid grid-cols-4 ">
        {
          itemData.length && itemData.map((item, index) => (
            <div>
              <ItemArray key={index} itemInfos={item} />
            </div>

          ))
        }
      </div>
    </div>
  )
}
export default App