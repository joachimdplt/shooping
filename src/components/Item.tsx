import type { IItem } from "../interfaces/item"


    interface IItemComponent {
        itemInfos: IItem,
    }

    const ItemArray = ({itemInfos}: IItemComponent) => {
    console.log("🚀 ~ ItemComponent ~ ItemComponent:", ItemArray)
     
    
    

    return(
        <div className="card-item border-2 p-4 rounded-2xl mb-1.5">
            <div className="mb-4 flex flex-col items-center">
                <img width={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GpL_ZIDGgvkK7A_dISo4-88IOsTXbVWxPw&s" alt="" className="rounded-2xl" />
            
            <p className="ml-auto rounded-2xl border mt-2 px-3 py-1">{itemInfos.product_price}</p>

               
            </div>
            <div className="border rounded-2xl pl-4">
                <h3 className="text-3xl mt-4 mb-">{itemInfos.product_name}</h3>
                <div className="mb-4 mr-4 ml-4 mt-4">
                <p>{itemInfos.product_description}</p>

                </div>
            </div>
            <div className="flex justify-center mt-4">
            <button className="btn btn-secondary">Add to card</button>
                
            </div>
            



        </div>
    )
} 
export default ItemArray;