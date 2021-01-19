import React from 'react'
import Body from '../components/Body'
import Header from '../components/Header'

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <Body>
        <Story />
      </Body>
    ),
  ],
}

const Template = (args) => <Header {...args} />

export const LoggedOut = Template.bind({})
LoggedOut.args = {}

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  isAuth: true,
}
