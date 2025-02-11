import About from "./Component/About";
import Education from "./Component/Education";


const NavList = [
    // name : path : component
    {
        name: 'About', path: '/#about', component: About
    }, {
        name: 'Education', path: '/#education', component: Education
    }, {
        name: 'Skillset', path: '/#skillset', component: null
    }, {
        name: 'Contact', path: '/#contact', component: null
    },
]
export default NavList;