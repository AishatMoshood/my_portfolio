import {GiSpanner} from 'react-icons/gi'
import {RiReactjsLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiFillAppstore} from 'react-icons/ai'


const data = [
    {
        id: 1, icon: <RiReactjsLine/>, title: 'Frontend Development', desc: "Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop."
    },
    {
        id: 2, icon: <FaServer/>, title: 'Backend Development', desc: "The security of your business/product is taken seriously right from the start of the project. I will make sure your website/app is secure from attacks."
    },
    {
        id: 3, icon: <AiFillAppstore/>, title: 'Fullstack Development', desc: "As a full stack developer, I have the skills and experience to create dynamic and responsive websites from start to finish. With expertise in both front-end and back-end development, I can build custom web applications that meet your unique needs."
    },
    {
        id: 4, icon: <GiSpanner/>, title: 'Website Maintenance', desc: 'As a website maintenance expert, I can help ensure that your website is always running smoothly and efficiently. From performing routine updates and backups to fixing bugs and optimizing performance.'
    }
]


export default data;