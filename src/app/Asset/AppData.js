// "use client";

import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6'

const NavList = [
    {
        name: 'About', path: '/'
    }, {
        name: 'Education', path: '/education'
    }, {
        name: 'SkillSet', path: '/skillset'
    }, {
        name: 'Link-Me', path: '/contact'
    }, {
        name: 'Resume', path: '/resume'
    },
]

const educationData = [
    {
        title: 'B.E. ComputerEngineering',
        description: 'MumbaiUniversity - BVCOE NaviMumbai',
        details: '2021-25 | GPA: 8.2',
    },
    {
        title: 'H.S.C. Science(PCM)',
        description: 'MSBSHSE - K.B.P. College NaviMumbai',
        details: '2021 | %: 86.33',
    },
    {
        title: 'S.S.C.',
        description: 'MSBSHSE - Kumud Vidyamandir Mumbai',
        details: '2019 | %: 85.20',
    },
]

const skillSet = [
    {
        title: 'Programming Languages',
        list: ['C/Cpp', 'Java', 'Python', 'TypeScript/JavaScript']
    }, {
        title: 'FrameWorks',
        list: ['FullStack Dev', 'Node-js', 'Python-Flask', 'Java-SpringBoot', 'Dart-Flutter']
    }, {
        title: 'DataBase',
        list: ['MySql (or similar)', 'MongoDB']
    }, {
        title: 'Cloud Computing',
        list: ['MS-Azure', 'G-FireBase']
    }, {
        title: 'Tool-Kit',
        list: ['Git/GitHub', 'Figma', 'Docker']
    },
]

const contactLink = [
    {
        name: 'GitHub',
        link: 'https://github.com/abhaybalip/',
        icon: <FaGithub />
    }, {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/abhay-balip/',
        icon: <FaLinkedin />
    }, {
        name: 'Twitter',
        link: 'https://twitter.com/AbhayBalip/',
        icon: <FaXTwitter />
    }, {
        name: 'Mail-me',
        link: 'mailto:abhay.balip01@gmail.com/',
        icon: <FaEnvelope />
    },
]

const ResumeLink = 'https://drive.google.com/file/d/1z1ebA8p9TYPYOrZdQD-_ZoiiBEso8-4w/preview'

export { NavList, ResumeLink, educationData, contactLink, skillSet };

