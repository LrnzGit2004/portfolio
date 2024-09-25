import React from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-scroll'

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/LrnzGit2004'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/eric-sobze'},
    {icon: <FaWhatsapp/>, path: 'https://wa.me/237653832394'}
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return <a key={index} href={item.path} className={iconStyles} target='blank'>{item.icon}</a>
        })}
      
    </div>
  )
}

export default Socials
