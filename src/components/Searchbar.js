import React from "react";

export default function Navbar() {
    return (
        <div className="navbar">
            <form className="searchbox">
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search"
                />
                <button type="submit"><img src="./images/searchLens.png" /></button>
            </form>
            <div className="part2">
            <button className="btn login-btn">LogIn</button>
            <button className="btn signup-btn">SignUp</button>
            </div>
        </div>
    )
}