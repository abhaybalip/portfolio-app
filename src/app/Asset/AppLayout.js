'use client';

import Link from "next/link";
import React from "react";

import { IoIosMenu, IoMdClose } from "react-icons/io";

import { NavList } from "./AppData";


import './Style/App.css'
import './Script/App'
import MouseFollower from "./Cursor";

const AppNav = () => {
    const [isNavOpen, setisNavOpen] = React.useState(false)

    return (
        <div className="app-nav">
            <div className="nav">
                <div className="nav-l">
                    {
                        NavList.map((item, index) => {
                            return (
                                <Link key={index} href={item.path} className="nav-li">{item.name}</Link>
                            )
                        })
                    }
                </div>
            </div>

            <div className="nav-s">
                <div className="nav-s-b">
                    {<IoIosMenu className="nav-s-b" onClick={() => setisNavOpen(true)}></IoIosMenu>}
                </div>
                <div className={`nav-s-l ${isNavOpen ? "open" : ""}`}>
                    <div className="nav-s-bc">
                        {<IoMdClose className="nav-s-bc" onClick={() => setisNavOpen(false)}></IoMdClose>}
                    </div>
                    <div className="nav-s-ll">
                        {
                            NavList.map((item, index) => {
                                return (
                                    <Link key={index} href={item.path} className="nav-s-li">{item.name}</Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
const AppFoot = () => {
    return (
        <div className="app-foot">
            <div>Thank You for Visiting 💝</div>
            <code>Developed By @AbhayBalip </code>
        </div>
    )
}

function AppLayout({ main }) {
    return (
        <div id="app" className="app">
            <MouseFollower />
            {
                AppNav()
            }
            <div className="app-main">
                {
                    main()
                }
            </div>
            {
                AppFoot()
            }
        </div>
    )
}
export default AppLayout;
