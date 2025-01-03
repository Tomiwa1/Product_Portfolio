import React from 'react'
import './css/Home.css'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { IconArrowRight, IconLocation } from '../icons/icons'
import { PopupWidget } from "react-calendly";

const Home = () => {
    const page = useLocation()

    console.log("\t\t\tCONTACT ME\n----------------------------------\n\n\nHey There i'm glad you liked the site and what to see whats going on, sure check the repo at https://github.com/tomiwa1/portfolio \n\nAnd dont forget to shoot me an email at tomiwa1.dev@gmail.com if you need me to come do awesome work at your company");

    const navList = [
        {
            title: "About",
            route:"/about"
        },
        {
            title: "Works",
            route: "/works"
        },
        {
            title: "Articles",
            route: "/articles"
        },
        {
            title: "Skills",
            route: "/skills"
        },
        {
            title: "Contact",
            route: "/contact"
        }
    ]

    return (
        <div>
            <PopupWidget 
                url="https://calendly.com/tomiwa1-dev/30min"
                rootElement={document.getElementById("root")}
                text="Schedule a meeting!"
                textColor="#ffffff"
                color="#00a2ff"
            />
            <div className="logo">
                <h1>Tomiwa Akinbode</h1>
            </div>
            <div className="content">
                <div className="nav">
                    {
                        page.pathname === '/' &&
                            <div className="intro">
                                <h2 className="grow">{"Tehnical Product Manager"} <br /> {"&"} <br /> {"Technical Writer"}</h2>
                                <p className="grow"><IconLocation /> Based in Lagos, Nigeria</p>
                            </div>
                    }
                    <div className="nav_list">
                        {navList.map(nav => nav.route === page.pathname ? (       
                            <div className='nav_item' key={nav.title}>
                                <p><Link to="/" className="active"><IconArrowRight /> {nav.title}</Link></p>
                                <div className="child">
                                    <Outlet />
                                </div>
                            </div>                 
                            ):
                            <div className="nav_item" key={nav.title}>
                                <p><Link to={nav.route}><IconArrowRight/> {nav.title}</Link></p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default Home
