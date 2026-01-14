import { useState } from "react"
import type { IItem } from "../interfaces/item"
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";


/// Je veux maintenant envoyer l'information depuis l'enfant au parent
/// Sauvegarder une information dans le panier de l'utilisateur
/// Si je clique sur mon bouton il faut declencher quelque chose
/// Une fonction => une fonction qui renvoie une fonction
///  STEP 1 Donc j'ajoute un onClick sur mon bouton de panier et je nomme cette fonction
/// je dois ensuite creer cette fonction addToCard()
///  je console log pour m'assurer que cette fonction fonctionne ''clicked
/// Puis je veux afficher les données des props
/// Pour remonter les infos de l'enfant au parent au lieu de lui passer des données statiques ....
/// STEP 2 je vais lui faire passer une FONCTION ...!
/// Je fais passer une fonction en props dans app lorsque j'appel item pour faire 
/// REMONTER L'INFORMATION 
/// Voir APPP SUITE  dans mon composant handleDataFromChild={getItemFromChild} 
/// STEP 2.1 PUIS JE PASSE handleDataFromChild comme itemInfos en props





interface IItemComponent {
    itemInfos: IItem,
    handleDataFromChild:(itemTitle: string) => void
}

const ItemToCard = ({ itemInfos, handleDataFromChild }: IItemComponent) => {
    ///let count = 0 
    const [counter, setCounter] = useState<number>(0)

    const countItem = () => {
        setCounter(counter +1)

        console.log(counter, itemInfos)
    }
    
  /*   
        STEP 1.2 je declare la fonction que j'ai ajouté en 1.1 
        const addToCard = () => {
                handleDataFromChild()
                //console.log(itemInfos)
                2.3 ON RETIRE LA FONCTION QUI EST INUTILE

            }
        */
    return (
        <div className="card-item border-2 p-4 rounded-2xl mb-1.5">
            <div className="mb-4 flex flex-col items-center">
                <img width={300} src={itemInfos.product_path}
                    alt="" className="rounded-2xl"
                />
                <p className="ml-auto rounded-2xl border mt-2 px-3 py-1">{itemInfos.product_price}</p>
            </div>
            <div className="border rounded-2xl pl-4">
                <h3 className="text-3xl mt-4 mb-">{itemInfos.product_name}</h3>
                <div className="mb-4 mr-4 ml-4 mt-4">
                    <p>{itemInfos.product_description}</p>

                </div>
            </div>
            <div className="icons flex justify-center items-center mt-4">
                <FaRegHeart onClick={() => countItem()} size={25}/> 
                    {/* STEP 1.1   je declare add to card
                    Mais en step 2.3 je me rend compte que addToCard ça fonction est la fonction handleDataFrom child  donc je peux remplacer
                            <CiShoppingCart onClick={() =>addToCard()} size={30}/> 

                    */}
                    <CiShoppingCart onClick={() => handleDataFromChild(itemInfos.product_name)} size={30}/>


            </div>




        </div>
    )
}
export default ItemToCard;