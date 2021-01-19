import React from 'react'
import Heading from '../components/Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => <Heading {...args} />

export const HeadingOne = Template.bind({})
HeadingOne.args = {
  level: '1',
  text: 'Heading Level 1 Text',
}

export const HeadingTwo = Template.bind({})
HeadingTwo.args = {
  level: '2',
  text: 'Heading Level 2 Text',
}
