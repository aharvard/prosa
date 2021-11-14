import React from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import Card from '../components/Card'
import Button from '../components/Button'
import Container from '../components/Container'

export default {
  title: 'Auth/Portfolio',
}

const templates = [
  { title: 'Structure an Argument', createdDate: 10, updatedDate: 24 },
  { title: 'Email Your Advisor', createdDate: 14, updatedDate: 29 },
  { title: 'Book Report', createdDate: 19, updatedDate: 44 },
]

const Template = () => (
  <Body>
    <Header isAuth />
    <Container className="min-h-screen mt-10">
      <div className="flex align-middle justify-between my-4">
        <Heading text="My Portfolio" level="1" />
        <div>
          <Button label="New Document Template" icon="add" />
        </div>
      </div>

      {templates.map(({ title, createdDate, updatedDate }) => (
        <Card>
          <Heading text={title} level="2" />

          {createdDate}
          {updatedDate}
          <Button label="Edit" icon="edit" />
          <Button label="Preview" icon="preview" />
          <Button label="Share" icon="share" />
        </Card>
      ))}
    </Container>
    <Footer />
  </Body>
)

export const Page = Template.bind({})
