import React from 'react'
import CtaStack from '../components/CtaStack'
import Body from '../components/Body'

export default {
  title: 'Components/CtaStack',
  component: CtaStack,
  decorators: [
    (Story) => (
      <Body>
        <Story />
      </Body>
    ),
  ],
}

export const Default = (args) => <CtaStack {...args} />
Default.args = {}
