import { useState } from "react"
import type { IItem } from "../interfaces/item"
import { CiShoppingCart } from "react-icons/ci";





interface IItemComponent {
    itemInfos: IItem,
}

const itemToCard = ({ itemInfos }: IItemComponent) => {
    ///let count = 0 
    const [counter, setCounter] = useState<number>(0)

    const countItem = () => {
        setCounter(counter +1)

        console.log(counter, itemInfos)
    }



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
            <div className="flex justify-center mt-4">
                <CiShoppingCart onClick={() => countItem()}  /> {counter}


            </div>




        </div>
    )
}
export default itemToCard;