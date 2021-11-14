import React from 'react'
import Button from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: { onClick: { action: 'clicked' } },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
  primary: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const ButtonWithIcon = () => <Button label="icon btn" icon="add" />
