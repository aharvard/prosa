import React from 'react'
import Hero from '../components/Hero'
import Body from '../components/Body'

export default {
  title: 'Components/Hero',
  component: Hero,
  decorators: [
    (Story) => (
      <Body>
        <Story />
      </Body>
    ),
  ],
}

const Template = (args) => <Hero {...args} />

export const HomePageHero = Template.bind({})
HomePageHero.args = {}
