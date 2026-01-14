import { CiShoppingCart } from "react-icons/ci"

const SidebarNavigation = () => {

    return (

        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
                    <label htmlFor="my-drawer-5" className="">
                        <CiShoppingCart size={50}  />
                    </label>

                    {/* Page content here */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
        )

}
export default SidebarNavigation