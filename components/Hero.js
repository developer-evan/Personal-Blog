// import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


export default function Hero() {
    return (
        <div className="text-white-500 text-center  mt-14 ">
            <div>
                <h1>Hi, I'M <span className="text-black  font-bold text-xl">Developer Evan</span></h1>
            </div>
            <div>
                <h1 className="font-bold text-xl" >A Front-End Engineer</h1>
            </div>
            <div >


                
                <p className="mx-25 ">Front end engineers plan, design, build, and implement the user interface systems of websites, <br />
                    software programs,
                    and web-based applications.<br />
                    Their primary goal is to provide a satisfactory user experience with no issues, errors, or downtime</p>
                <div className="justify-center flex ml-7 mt-5 text-2xl">
                    <FaFacebook className="m-5"/>
                    <FaInstagram className="m-5"/>
                    <FaTwitter className="m-5"/>
                    <FaGithub className="m-5"/>
                    {/* <FaLinkedin className="m-5"/> */}
                  
                </div>
            </div>
        </div>
    )
}
