import React from 'react'
import SlateEditor from '../components/SlateEditor'

export default {
  title: 'Components/Editor',
  component: SlateEditor,
  parameters: {
    layout: 'centered',
  },
}

export const Default = (args) => <SlateEditor {...args} />
Default.args = {}
