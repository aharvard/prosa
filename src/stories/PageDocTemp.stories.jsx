import React from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import Card from '../components/Card'
import SlateEditor from '../components/SlateEditor'
import Button from '../components/Button'
import Container from '../components/Container'

export default {
  title: 'Auth/Document Template',
}

const Template = () => (
  <Body>
    <Header isAuth />
    <Container className="min-h-screen mt-10">
      <Button label="Back to Portfolio" />
      <div className="flex align-middle justify-between my-4">
        <Heading text="Research Proposal" level="1" />
        <div>
          <Button label="Preview" />
          <Button label="Share" />
        </div>
      </div>
      <Card>
        <SlateEditor />
      </Card>
    </Container>
    <Footer />
  </Body>
)

export const Page = Template.bind({})
