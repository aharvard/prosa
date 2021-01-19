import React from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import SlateEditor from '../components/SlateEditor'

export default {
  title: 'Page/Portfolio',
}

const Template = () => (
  <Body>
    <Header isAuth />
    <div className="p-20 min-h-screen">
      <Card>
        <SlateEditor />
      </Card>
    </div>
    <Footer />
  </Body>
)

export const HomePage = Template.bind({})
