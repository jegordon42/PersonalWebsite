import AI from './static/AI.png'
import Budget from './static/Budget.png'
import Camera from './static/Camera.png'
import JoeRocket from './static/JoeRocket.png'
import Mirror from './static/Mirror.png'
import Map from './static/Map.png'

export const NAME = 'Joseph Gordon';
export const OCCUPATION = 'Full-Stack Software Engineer';
export const OCCUPATION_DESCRIPTION = 'Welcome! I\'m passionate about transforming ' +
'ideas into elegant, impactful software solutions.';

export const GITHUB_LINK = "https://github.com/jegordon42"
export const FACEBOOK_LINK = "https://facebook.com/jojoeyoj"
export const LINKEDIN_LINK = "https://www.linkedin.com/in/joseph-gordon-524151119/"
export const EMAIL_LINK = "mailto: jegordon42@gmail.com"

export const ABOUT = `
<p>
My journey began back in 2012 when I took my first coding course 
with my sister in high school. From that moment, I've been hooked on the 
<b>thrill of problem-solving</b> through code, the satisfaction of building 
something from scratch, and the joy of seeing my creations come to life
and make a difference.
</p>
<p>
I'm a <b>versatile software engineer</b>, comfortable navigating the 
full stack, from front-end development to backend architecture. I 
thrive in collaborative environments where I can learn from others, 
share my knowledge, and contribute to building something bigger than myself.
</p>
<p>
Beyond the code, I'm an <b>avid learner</b> always seeking new challenges 
and technologies to explore. I'm also a <b>strong communicator</b>, believing 
that clear and concise dialogue is key to successful collaboration.
</p>
`

export const EXPERIENCE = {
    experiences : [
        {
            type: 'Job',
            date: 'AUG 2022 - PRESENT',
            name: 'Google',
            link: 'https://cloud.google.com/support',
            role: 'Software Engineer',
            description: 'I work on the Google Cloud Platform team creating tools to optimize the support experience for customers.',
            skills: [
                'Java',
                'TypeScript',
                'Angular'
            ]
        },
        {
            type: 'Job',
            date: 'JULY 2020 - MAY 2022',
            name: 'Bank of America',
            link: 'https://bankofamerica.com',
            role: 'Software Engineer',
            description: 'I developed software to make sure trading data was always accurate.',
            skills: [
                'Python',
                'TypeScript',
                'SQL',
                'Flask',
                'React',
                'Jenkins',
                'Selenium'
            ]
        },
        {
            type: 'Job',
            date: 'MAY 2018 - JAN 2020',
            name: 'Genewiz',
            link: 'https://genewiz.com/',
            role: 'Software Engineer',
            description: 'I worked on their ordering platform to help millions of people get their DNA sequencing done.',
            skills: [
                'C#',
                'JavaScript',
                'SQL',
                'Vue',
                'ASP.Net',
                'MVC'
            ]
        },
        {
            type: 'Job',
            date: 'JUN 2013 - JAN 2018',
            name: 'Targeted Technologies',
            link: 'https://targtech.com/',
            role: 'Software Engineer',
            description: 'My first developer experience where I created custom applications for our customers.',
            skills: [
                'C#',
                'VB',
                'JavaScript',
                'SQL',
                'ASP.Net',
                'MVC'
            ]
        },
        {
            type: 'Education',
            date: 'SEP 2016 - MAY 2020',
            name: 'Rutgers University',
            link: 'https://soe.rutgers.edu/student-experience/engineering-honors-academy',
            role: 'Honors Academy',
            description: 'I majored in Computer Engineering and minored in Computer Science.',
            skills: [
                'Java',
                'C',
                'SQL',
                'TypeScript',
                'Angular'
            ]
        },
        {
            type: 'Education',
            date: 'SEP 2011 - MAY 2015',
            name: 'Toms River High School North',
            link: 'https://www.trschools.com/hsnorth/',
            description: 'Where I first was introduced to Computer Science.',
            skills: [
                'Java',
                'C++',
            ]
        }

    ]
}

export const PROJECTS = {
    projects : [
        {
            name: "AI Assistant: JoeBot",
            image: AI,
            align: 'left',
            imageStyle: {
                height: "11rem",
                width: "19rem"
            },
            mobileImageStyle: {
                height: "8rem",
                width: "10rem"
            },
            description: [
                {
                    type: "text",
                    text: "Embedded on this website you can find a chatbot that can answer questions about me."
                },
            ],
            skills: [
                "OpenAI",
            ]
        },
        {
            name: "Life Events",
            image: Map,
            align: 'right',
            imageStyle: {
                height: "11rem",
                width: "19rem"
            },
            mobileImageStyle: {
                height: "8rem",
                width: "10rem"
            },
            link: "https://joseph-gordon.com/life-events",
            description: [
                {
                    type: "text",
                    text: "A travel tracker / journaling app / social media application. A work in progress but I'd argue Its already looking pretty good!"
                },
            ],
            skills: [
                "Javascript",
                "React",
                "Google Firestore",
                "Google Cloud Storage"
            ]
        },
        // {
        //     name: "Magic Mirror App",
        //     image: Mirror,
        //     imageStyle: {
        //         height: "8rem",
        //         width: "8rem"
        //     },
        //     mobileImageStyle: {
        //         height: "7rem",
        //         width: "6rem",
        //         marginTop: '1rem'
        //     },
        //     align: 'right',
        //     description: [
        //         {
        //             type: "text",
        //             text: "I havent built this yet but I really want to make a custom " +
        //             "widget for my RasberryPi's Magic Mirror!"
        //         },
        //     ],
        //     skills: [
        //         "Javascript",
        //         "HTML"
        //     ]
        // },
        {
            name: "JoeLinks",
            image: JoeRocket,
            imageStyle: {
                height: "12rem",
                width: "19rem"
            },
            mobileImageStyle: {
                height: "12rem",
                width: "14rem"
            },
            align: 'left',
            link: "https://joelinks.net/",
            description: [
                {
                    type: "text",
                    text: "Short URLs! I wanted an easy way to navigate to my Google Docs " +
                    "because the URLs were impossible to remember and I did not feel like " +
                    "constantly searching for them."
                },
            ],
            skills: [
                "Javascript",
                "Angular",
                "Google Firebase"
            ]
        },
        {
            name: "BluBudget",
            image: Budget,
            imageStyle: {
                height: "10rem",
                width: "19rem"
            },
            mobileImageStyle: {
                height: "8rem",
                width: "10rem",
                marginTop: "1rem",
            },
            align: 'right',
            description: [
                {
                    type: "text",
                    text: "I was looking for an excuse to make a multi-platformed app " +
                    "with React/React Native. One day I wanted to start using a " + 
                    "budgeting app and just decided to make my own so I could see " +
                    "customized visuals of my spending exactly how I wanted."
                },
            ],
            skills: [
                "Python",
                "Javascript",
                "SQL",
                "Flask",
                "React",
                "React Native",
                "Firebase",
                "Azure"
            ]
        },
        {
            name: "UFlix",
            image: Camera,
            imageStyle: {
                height: "8rem",
                width: "12rem",
                marginTop: "1rem",
                marginBottom: "1rem",
                marginLeft: "1rem",
                marginRight: "3rem"
            },
            mobileImageStyle: {
                height: "8rem",
                width: "10rem",
                marginTop: "1rem"
            },
            align: 'left',
            description: [
                {
                    type: "text",
                    text: "After learning IOS development using this "
                },
                {
                    type: "link",
                    text: "course",
                    link: "https://www.udemy.com/course/ios-13-app-development-bootcamp/"
                },
                {
                    type: "text",
                    text: ", I made video streaming app for your own personal videos with a " +
                    "Netflix-like interface."
                },
            ],
            skills : [
                "Swift",
                "Xcode"
            ]
        }
    ]
}

export const SKILLS = {
    skills : [
        {
            name: "Programming",
            list: [
                "Java", 
                "Python", 
                "JavaScript",
                "C", 
                "C#", 
                "SQL", 
                "Swift", 
                "VB", 
                "VBA",
                "HTML/CSS"
            ]
        },
        {
            name: "Frameworks / Databases",
            list: [
                "React", 
                "React Native", 
                "Angular",
                ".Net", 
                "MVC", 
                "Flask", 
                "Selenium", 
                "SQL"
            ]
        },
        {
            name: "DevOps / Cloud Services",
            list: [
                "Jenkins", 
                "Azure DevOps", 
                "Azure Database Hosting", 
                "Azure Application Hosting",
                "AWS S3", 
                "Firebase"
            ]
        },
    ]
}