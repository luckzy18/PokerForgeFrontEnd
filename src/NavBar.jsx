import{Link, useMatch, useResolvedPath} from "react-router-dom";

function NavBar() {
  return (
    <header className="nav">
 
        <CustomLink to="/" >PokerForge</CustomLink>
        <nav>
          <ul>
            <CustomLink to="/Play">Play</CustomLink>
             <CustomLink to="/Framework">Framework</CustomLink>
              <CustomLink to="/About">About</CustomLink>
          </ul>
        </nav>

       <CustomLink to="/Account" className="account-btn">Account</CustomLink>
    </header>
  );
}
function CustomLink({to,children,...props}){
    const resolvedPath= useResolvedPath(to)
    const isActive = useMatch({path : resolvedPath.pathname, end : true})
    return ( <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>{children}</Link>
        </li>)
}
export default NavBar;