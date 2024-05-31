import './Header.css'
const Header = () =>{
    return(
        <div className="header">
           <h2>LOGO</h2>
            <div className="menu">
                <button className="btn">Home</button>
                <button className="btn">Users</button>
                <button className="btn">Planets</button>
                <button className="btn">Starships</button>
            </div>
            <input type="text" placeholder="Search..." />
        </div>
    )
}
export default Header