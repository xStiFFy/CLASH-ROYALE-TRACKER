import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {

    return (
        <nav className="toolbar" id="mainToolbar">
            <ul>
                <li>
                    <NavLink to="/analytics" className="toolbarButton">
                        ANALYTICS
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/matchups" className="toolbarButton">
                        MATCHUPS
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/" end className="toolbarButton">
                        HOME
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/deck-builder" className="toolbarButton">
                        DECK BUILDER
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/settings" className="toolbarButton">
                        SETTINGS
                    </NavLink>
                </li>
            </ul>
        </nav>
    );

}