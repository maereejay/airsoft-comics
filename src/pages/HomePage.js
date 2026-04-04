
import React from 'react'
import './HomePage.css'
import { Helmet } from "react-helmet";
import Section1 from '../components/HomePage/Section1'
import Section2 from '../components/HomePage/Section2'
import Section3 from '../components/HomePage/Section3'
import Section4 from '../components/HomePage/Section4'
import Section5 from '../components/HomePage/Section5'
import Section6 from '../components/HomePage/Section6'

import Knowyou from '../components/HomePage/Knowyou'
import Portfolio from '../components/HomePage/Portfolio'
export default function HomePage() {
  return (
    <div className="HomePage">
       <Helmet>
        <title>Comic book Illustrators
</title>
        <meta
          name="description"
          content="Looking for a professional comic book illustrator? Our global illustrator agency delivers expressive, high-quality comic art. Email us to discuss your project."
        />
      </Helmet>
      <main className="hmain">
        <div className='hsect1'>
          <Section1/>
        </div>
         <div className='hsect3'>
           <Section2/>
       
        </div>
         <div className='hsect2'>
             <Portfolio/>
        </div>
       
        <div className='hsect2'>
          <Knowyou/>
        </div>
        <div className='hsect3'>
          <Section3/>
        </div>
        
          <div className='hsect5'>
          <Section5/>
        </div>
        <div className='hsect4'>
          <Section4/>
        </div>
        
        <div className='hsect6'>
          <Section6/>
        </div>
      
        
      </main>
    
    </div>
  )
}

