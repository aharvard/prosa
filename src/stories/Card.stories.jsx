import React from 'react'
import Card from '../components/Card'
import Body from '../components/Body'
import Container from '../components/Container'

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [
    (Story) => (
      <Body>
        <Container>
          <div className="pt-10">
            <Story />
          </div>
        </Container>
      </Body>
    ),
  ],
}

export const Default = (args) => <Card {...args}>Card</Card>
Default.args = {}
