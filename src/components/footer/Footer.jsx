import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';
import logo from '../../assets/logo.png';
import { footerLinks } from '../../data/footerLinks';


const Footer = () => {
  const social = [{title: "Facebook", link: "/", icon: <AiOutlineFacebook/>}, {title: "Twitter", link: "/", icon: <AiOutlineTwitter/>}, {title: "Youtube", link: "/", icon: <AiOutlineYoutube/>}, {title: "Instagram", link: "/", icon: <AiOutlineInstagram/>}];
  return (
    <div className='relative py-24 lg:py-28 border-t border-neutral-200'>
      <div className='container md:mx-auto sm:mx-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-5 sm:gap-x-8 lg:gap-x-10'>

        <div className='lg:flex lg:flex-col grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 '>
          <div className='col-span-2 md:col-span-1' >
            <a href="/" className='inline-block w-24'><img src={logo} alt="logo" className='object-cover w-full'/></a>
          </div>
          <div className='col-span-2 md:col-span-3 flex items-center'>
            <div className='flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start'>
              {
                social?.map((item, i)=>(
                  <a key={i} href={item.link} className='flex items-center text-2xl text-neutral-700 hover:text-black leading-none space-x-2 group'>
                    {item.icon}
                    <span className='text-sm hidden lg:block'>{item.title}</span>
                  </a>
                ))
              }
            </div>
          </div>
        </div>

        {
          footerLinks?.map((links, i)=>(
            <div className='text-sm' key={i}>
              <h2 className='font-semibold text-neutral-700'>{links.heading}</h2>
              <ul className='mt-5 space-y-4'>
                {
                  links?.subLinks?.map((link, i)=>(
                    <li key={i} >
                      <a href={link.link} className='text-neutral-600 hover:text-black '>{link.title}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }

      </div>
    </div> 
  )
};

export default Footer;
