import React from 'react'
import Body from '../components/Body'
import Footer from '../components/Footer'

export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <Body>
        <div className="flex items-end h-screen">
          <Story />
        </div>
      </Body>
    ),
  ],
}

const Template = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {}
