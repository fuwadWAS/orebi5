import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Level from '../Level'
import Input from '../Input'
import Button from '../Button'
import Header from '../Header'
import SubHeader from '../SubHeader'

const Contacts = () => {
  return (
    <section>
        <Container>
           <Header className="pt-[124px] pb-[152px]" text="Contacts"/>
            <div className="w-[782px] mb-[20px]">
                <SubHeader text="Fill up a Form"/>
                <div className="w-[100%] border-b-2 border-[#F0F0F0] mt-[42px] mb-[23px]">
                 <Level levelName="Name"/>
                 <Input type="text" placeholder="your name here "/>
                </div>
                <div className="w-[100%] border-b-2 border-[#F0F0F0] mb-[23px]">
                 <Level levelName="Email"/>
                 <Input type="email" placeholder="Your email here"/>
                </div>
                <div className="w-[100%] border-b-2 border-[#F0F0F0]">
                 <Level levelName="Message"/>
                 <textarea className='focus:outline-none' placeholder='Your message here'  cols='100'/>
                </div>
                <Button className="w-[200px] py-[16px] px-[65px] mt-[30px]" text="Post"/>
            </div>
        </Container>
    </section>
  )
}

export default Contacts