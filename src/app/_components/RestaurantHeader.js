import Link from "next/link"

const RestaurantHeader =()=>{
    return(
        <div className="header-wrapper">
            <div className="logo">
                <img style={{width:100}} src="favicon.ico" />
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Login/SignUp</Link>
                </li>
                <li>
                    <Link href="/">Profile</Link>
                </li>
            </ul>
        </div> 
    )
}

export default RestaurantHeader;