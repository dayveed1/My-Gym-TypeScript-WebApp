import React from 'react';
import Logo  from '@/assets/Logo.png';


type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
           <img src={Logo} alt="footer-logo"/>
           <p className="my-5">
            lorem insokdiuia sihajdb ahvhabjan abhcjah ghvhja hahvchah
           </p>
           <p className="clas">
            &#169; Dayveed &#8482; All Rights Reserved &#174; 
           </p> 

        </div>

        <div className="mt-16 md:mt-0 basis-1/4">
         <h4 className=" font-bold">
          Links
         </h4>
         <p className="my-5">
            Botuutsjbnay
         </p>
         <p className="my-5">
            gehghj ajgcahj sdhkajksf
         </p>
         <p>
          Tehhkjahjd 
         </p>
        </div>

        <div className="mt-16 md:mt-0 basis-1/4">
        <h4 className=" font-bold">
          Contact Us
         </h4>
         <p className="my-5">
            Botuutsjbnay
         </p>
         <p className="">
            09087478782802
         </p>

        </div>
         
      </div>

    </footer>
  );
};

export default Footer