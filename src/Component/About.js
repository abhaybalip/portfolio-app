
import '../Asset/css-file/About.css'

const AboutIcon = require('../Asset/img-file/Head-Icon/About-Icon.jpg')

const UserImgPath = require('../Asset/img-file/UserPhoto.jpg'),
    EmailImg = require('../Asset/img-file/Email-img.jpg'),
    LikedinImg = require('../Asset/img-file/Linkedin-img.jpg'),
    GithubImg = require('../Asset/img-file/Github-img.jpg'),
    HackerRankImg = require('../Asset/img-file/HackerRank-img.jpg')

const EmailLink = 'mailto:abhay.balip01@gmail.com/',
    LinkedinLink = 'https://www.linkedin.com/abhaybalip/',
    GitHubLink = 'https://www.github.com/abhaybalip/',
    HackerRankLink = 'https://www.hackerrank.com/abhaybalip/'

export function About() {
    return (
        <div id="about-body">

            <div id='user-info' style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',

                backgroundColor: '#414141',
                border: '1px solid #e0e0e0',
                borderRadius: '1rem',
                padding: '1rem'
            }}>
                <div id='about-img' src={UserImgPath} alt="user-image"></div>
                <p>
                    Abhay Arun Balip
                </p>
                <p>
                    25th May 2004 / Male
                </p>
            </div>

            <div id='user-link' style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',

                // color: '#313131',
                backgroundColor: '#414141',
                border: '1px solid #e0e0e0',
                borderRadius: '1rem',
            }}>
                <a href={EmailLink} target="_blank">
                    <img id='link-img' src={EmailImg}></img>
                </a>

                <a href={LinkedinLink} target="_blank">
                    <img id='link-img' src={LikedinImg}></img>
                </a>

                <a href={GitHubLink} target="_blank">
                    <img id='link-img' src={GithubImg}></img>
                </a>

                <a href={HackerRankLink} target="_blank">
                    <img id='link-img' src={HackerRankImg}></img>
                </a>

            </div>


        </div>
    )
}
