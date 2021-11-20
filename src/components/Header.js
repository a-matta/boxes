import {NavLink} from "react-router-dom"

const Header = () => {
    return (
        <header>
          <p>Logo</p>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts">Contacts</NavLink>
                        </li>
                        <li>
                            <NavLink to="/boxes">Boxes</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;