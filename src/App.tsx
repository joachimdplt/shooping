import ItemArray from "./components/Item"
import { itemData } from "./data/itemData"

const App = () => {

/*
 .map sert a parcourir un tableau
 la reflexion pour parcourir un tableau c'est object.map((item) => <Object data={item}>)
 */
    // Je prends mon tableau 
    // et j'utilise .map pour parcourir chaque élément du tableau
    // .map va exécuter une fonction pour chaque élément
    // et retourner un nouveau tableau
    // item est la valeur actuelle du tableau pendant le parcours
    // Chaque item correspond à un element de mon tableau
    // Il est ensuite utilisé pour générer un composant dynamique
    /// ----> Etat de l'art 

    ///objectData.map((k) => <object data= {k}/>)


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