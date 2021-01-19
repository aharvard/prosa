import React from 'react'
import Hero from '../components/Hero'
import Body from '../components/Body'
import Header from '../components/Header'
import CtaStack from '../components/CtaStack'
import Footer from '../components/Footer'

export default {
  title: 'Page/Home',
}

const Template = () => (
  <Body>
    <Header />
    <Hero />
    <div className="flex ">
      <CtaStack
        eyebrowText="Teaching"
        headingText="I’m an Instructor"
        blurbText="Instructors use Prōsa to create intelligent document templates that function as writing wizards for students."
        ctaText="Create a Document Template"
      />
      <CtaStack
        eyebrowText="Learning"
        headingText="I’m a Student"
        blurbText="Students use Prōsa to learn how to write professional documents by answering questions in easy-to-use writing wizards."
        ctaText="Try it Out"
      />
    </div>
    <Footer />
  </Body>
)

export const HomePage = Template.bind({})
