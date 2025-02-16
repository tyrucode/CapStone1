//react router imports
import { NavLink, Outlet } from "react-router"
//other imports

function RootLayout() {
    return (
        <div className="rootLayout">
            <header>
                <nav>
                    <h1>Spotify Guessing Game!</h1>
                    <NavLink to='/'>Home</NavLink>
                </nav>
            </header>
            <main>
                <h1>Spotify Guessing Game inspired by Wordle!</h1>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout