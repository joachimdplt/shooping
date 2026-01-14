import SidebarNavigation from "./components/SideNavigation"
import { itemData } from "./data/itemData"
import ItemToCard from "./components/Item"
import { useState } from "react"
import { FiArrowLeftCircle } from "react-icons/fi"

///SUITE STEP 2
/// handleDataFromChild={getItemFromChild} 



const App = () => {

  const [selectedItem, setSelectedItem]= useState<string[]>([])

  // 2.2 PUIS JE DECLARE la fonction, je log si le composant est bien cliqué depuis le parent
  const getItemFromChild = (itemTitle: string) => {
    ////VErifier si element deja present dans le panier ? On fait un variable 
    ///si deja present ne rien changer IF pour condition 
    // sinon ajouter le nouvel item au panier avec une variable
/*     const ancien = ["pomme", "banane"]
      const nouveau = [...ancien, "orange"]
      console.log(nouveau) // ["pomme", "banane", "orange"] */
      setSelectedItem((prev) => {
        const onCard = prev.includes(itemTitle)

        if(onCard) {
          return prev
        }
        const newCard = [...prev, itemTitle]
        return newCard

      }) 



    console.log(itemTitle);
    

  }

  return (

    <div className="flex flex-col items-center mb-4">
        <SidebarNavigation selectedItem={selectedItem}/>
        <h3>ITEM SELECTED : {selectedItem.join(", ")}</h3>
      <div className="gap-3 items-center grid grid-cols-4 ">
        {
          itemData.length && itemData.map((item, index) => (
            <div>
              {/* STEP 2.1 JAJOUTE handleDataFromChild={getItemFromChild}  */}
              <ItemToCard key={index} itemInfos={item} handleDataFromChild={getItemFromChild} />
            </div>

          ))
        }
      </div>
    </div>
  )
}
export default App